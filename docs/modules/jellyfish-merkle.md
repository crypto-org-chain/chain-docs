# Jellyfish Merkle Trie

> The ascii arts is copied from libra code comments.

## Concept

```rust
type H256 = [u8; 32];
fn hash(value: Option<Value>) -> H256;
fn hash(left: H256, right: H256) -> H256;
```

We build the conceptual model first, then apply the optimizations on top of it to make it practical.

- It's a complete binary tree with 256 depth, the leaf node contains `Option<Value>`, `None` means value not exists.
- It's a binary trie which implements the map from  `H256` to `Option<Value>`.
- It's a merkle tree, so all the internal nodes contains hashes of it's direct children.
  - Hash of leaf nodes: `hash(value)`.
  - `hash(None)` is a constant, it's called a placeholder hash.
  - Hash of internal nodes: `hash(left, right)`.

Every modification in leaf nodes should cause the root hash and all the internal nodes along the path to change.

> `hash(left, right) != hash(right, left)`
>
> This is important to fulfill above property.

All the nodes are stored in underlying key-value storage(usually on disk), and
all the nodes committed into underlying storage are considered immutable, so we
can query the old state, unless we decide to prune the states that is too old.

### Merkle Proof

- Membership merkle proof for a key is the list of sibling hashes along the
  path from leaf node to the root node, combined with the key itself.
- Non-membership proof is just an membership proof lead to a `None` value.
- Range proof, TODO.

## Optimization

- Flatten a 4 layer complete binary tree into array of 16 leaf nodes, this reduces the total numbers of nodes.

  The internal node only stores leaf nodes of this sub-tree, these leaf nodes might denote either a leaf node or an
  internal node in outer tree.

  The hash of the internal node is the root hash of this subtree, which is computed like this:

  ```text
  InternalNode[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F]
  
    4 ->              +------ root hash ------+
                      |                       |
    3 ->        +---- # ----+           +---- # ----+
                |           |           |           |
    2 ->        #           #           #           #
              /   \       /   \       /   \       /   \
    1 ->     #     #     #     #     #     #     #     #
            / \   / \   / \   / \   / \   / \   / \   / \
    0 ->   0   1 2   3 4   5 6   7 8   9 A   B C   D E   F
    ^
  height
  Note: # denotes the hash of its two direct children
  ```

  We also need treat it as a sub-tree when generating merkle proof.

  > **Nibbles**
  >
  > When traversing the internal nodes, we need to iterate the 32 bytes key in units of 4-bit nibbles like this:
  > 
  > ```rust
  > 0x0123456789abcdef -> [0x0, 0x1, 0x2, 0x3, ...]
  > ```

- Replace a subtree which has no non-empty leaf node with a `None`.

  Replace a subtree which has single non-empty leaf node with the leaf node itself.

  It further shortens the average depth of path greatly in sparse case.

  > The merkle patrica tree in ethereum further utilize extension node to shorten the path, we don't implement that to
  > keep the logic simpler.

  This rule applies to both the outer tree and the sub-tree inside the internal node.

  For example (notice the path of  `C` is not shortened because it references an internal node):

  ```text
  InternalNode[
    0 => Child(leaf),
    3 => Child(leaf),
    8 => Child(leaf),
    C => Child(internal),
    _ => None,
  ]

    4 ->              +------ root hash ------+
                      |                       |
    3 ->        +---- # ----+           +---- # ----+
                |           |           |           |
    2 ->        #           @           8           #
              /   \                               /   \
    1 ->     0     3                             #     @
                                                / \
    0 ->                                       C   @
    ^
  height
  Note: @ denotes placeholder hash.
  ```

- Identify nodes in underlying storage with `(version, nibble path)` rather than hash, the `version` is a monotonically
  increasing number.

  This helps to keep data compact in underlying storage, because the nodes are inserted in key order.

  > We use the block height as the version number, we'll use them interchangeably in this doc.

- We can compress the duplicates of placeholder hashes in the merkle proof.

  > Not implemented in this library yet, can be implemented outside of the library.
  >
  > Effectiveness need further benchmarks.

## Algorithm

### Types

```rust
type Value = Vec<u8>;

struct NodeKey {
  version: Version,
  nibbles: Vec<Nibble>,
}
struct Leaf {
  key: H256,
  value: Value,
}
struct Internal {
  children: HashMap<Nibble, Child>,
}
struct Child {
  version: Version,
  hash: H256,
  is_leaf: bool,
}
enum Node {
    Null,  // Special branch only for empty tree, ignored for simplicity.
    Internal(Internal),
    Leaf(Leaf),
}
```

### `get`

```rust
// proof generation is ignored.  
fn get(key: H256, version: Version) -> Option<Value> { 
  let mut next_key = NodeKey::new(version, vec![]);
  for i in 0..64 {
    match get_node(next_key) {
      Internal(node) => { 
        let nibble = key.nibbles(i);  // get the i-eth nibble.  
        if let Some(child) = node.children.get(nibble) {
          next_key = NodeKey::new(child.version, next_key.nibbles + nibble);
        } else {
          // not exists
          return None;
        }
      }
      Leaf(node) => {
        // nibble prefix is the same, but key maybe different.
        return if node.key == key {
          Some(node.value)
        } else {
          None
        };
      }
    }
  }
  None
}
```

### `set`

Since the nodes on disk are immutable, so when we need to update a value, we create new nodes. For example, when we
update `key2`'s value:

```text
                  (on disk)              (in memory)
                    root0                  root1'
                   /     \                /     \
                  /   ___ \ _____________/       \
                 /  _/     \                      \
                / _/        \                      \
               / /           \                      \
  key1 => value11           key2 => value21       key2 => value22
     (on disk)                 (on disk)            (in memory)
```

And to optimize batch operations, when a node is already in memory, it's replaced. For example, if we update `key1`'s
value now,  `root1'` is deleted and replaced by `root1''`:

```text 
                  (on disk)                                     (in memory)
                    root0                                         root1''
                   /     \                                       /     \
                  /       \                                     /       \
                 /         \                                   /         \
                /           \                                 /           \
               /             \                               /             \
  key1 => value11             key2 => value21  key1 => value12              key2 => value22
     (on disk)                   (on disk)       (in memory)                  (in memory)
```

In the end, all the in memory nodes need to be persisted into the underlying storage.

We need a cache api to manage these in memory nodes:

```rust
fn cache_get(node_key) -> Node {
  if let Some(node) = cache.get(node_key) {
    node.clone()
  } else {
    // load from underlying storage
    get_node(node_key)
  }
}
fn cache_delete(node_key) {
  if cache.remove(node_key).is_none() {
    assert!(stale_nodes.insert(node_key), "Node gets stale twice unexpectedly.");
  }
}
fn cache_put(node_key, node) {
  assert!(cache.insert(node_key, node).is_none(),
    "Node gets inserted twice unexpectedly");
}
```

The actual `put` implementation:

```rust
fn put(key, value, version) {
  let root_key = NodeKey::new(version, vec![]);
  put_at(root_key, key, value, version, )
}

fn put_at(node_key, key, value, version, i_visited) -> (NodeKey, Node) {
  cache_delete(node_key);

  match get_node(node_key) {
    Internal(node) => {
      let visited = key.nibbles()[0 .. i_visited];
      let nibble = key.nibbles(i_visited);
      let new = if let Some(child) = node.children.get(nibble) {
        put_at(NodeKey::new(child.version, visited + nibble),
               key, value, version, i_visited + 1).1
      } else {
        let new = Node::new_leaf(key, value);
        cache_put(NodeKey::new(version, visited + nibble), new);
        new
      };
      node.children.insert(nibble, new);
      node_key.version = version;
      cache_put(node_key, node);
      (node_key, node)
    },
    Leaf(existing_leaf) => {
      cache_delete(node_key);

      let visited = key.nibbles()[0..i_visited];
      let remaining = key.nibbles()[i_visited..];
      let existing = existing_leaf.key.nibbles()[i_visited..];
      let (prefix, remaining, existing) = skip_common_prefix(remaining, existing);
      if remaining.is_empty() {
        assert!(existing.is_empty());
        // same key, update the leaf
        let new = Node::new_leaf(key, value);
        cache_put(NodeKey::new(version, node_key.nibbles), new);
        new
      } else {
        // create internal node.
        cache_put(NodeKey::new(version, visited + prefix + existing[0]), existing_leaf);
        let new = Node::new_leaf(key, value);
        cache_put(NodeKey::new(version, visited + prefix + remaining[0]), new);

        let node = InternalNode::two_children(
          existing[0], existing_leaf.hash(),
          remaining[0], new.hash(),
        );
        cache_put(NodeKey::new(version, visited + prefix), node);
        while let Some(nibble) = prefix.pop() {
          node = InternalNode::one_child(nibble, node);
          node_key = NodeKey::new(version, visited + prefix);
          cache_put(node_key, node);
        }
        (node_key, node)
      }
    }
  }
}
```

## Encoding

The encoding is simply concatenate the fields together.

- `H256`
  It is encoded as fixed length byte array, which is just bytes themselves, no length prefixed.

- `Vec<u8>`

  Variable length byte array is encoded as the bytes prefixed with a `u64` length.

- Numbers are encoded as little endian by default, unless indicated otherwise.

### `Node`

- `tag: u8`

  `Null: 0, Internal: 1, Leaf: 2`

- Content of different branches, empty for `Null` branch.

#### `Internal`

- `existence_bitmap: u16`. The bit is set if the child exists.

- `leaf_bitmap: u16`. The bit is set if the child exists and is leaf node.

- `for i in existence_bitmap:`

  - `version: u64`, [ULEB128](https://en.wikipedia.org/wiki/LEB128)

    > The high bit is set if more bytes follow
    >
    > ```rust
    > for _ in 0..8 {
    >   let low_bits = num & 0x7f;
    >   num >>= 7;
    >   let more = num > 0;
    >   push(low_bits | more << 7);
    >   if !more {
    >     break;
    >   }
    > }
    > ```

  - `hash: H256`

#### `Leaf`

- `key: H256`
- `hash: H256`
- `value: Vec<u8>`
  - `size: u32`,  [ULEB128](https://en.wikipedia.org/wiki/LEB128), max `2^31`
  - bytes

### `NodeKey`

The key used to identify node in key-value storage.

- `version: u64`, big endian.

  > Big endian is used here to keep the numeric order.

- `num_nibbles: u8`

- `nibble_bytes: bytes`

  One byte for two nibbles.
