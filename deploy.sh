#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# build full doc pdf
cd docs/

# hack for hide navbar when exporting PDF
sed -i '' -e "/navbar/s/true/false/" ./.vuepress/config.js
vuepress export
# restore navbar true and mv to dist
sed -i '' -e "/navbar/s/false/true/" ./.vuepress/config.js
mv 'Crypto.com Chain.pdf' ./.vuepress/dist/Crypto.com_Chain.pdf


# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:crypto-com/crypto-com.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
