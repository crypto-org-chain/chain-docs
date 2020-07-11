<template>
  <div class="theme-container">
    <Navbar />

    <div class="theme-default-content">
      <div class="wrapper">
        <img class="not-found" :src="$withBase('/404.svg')" alt="not-found" />
        <p class="not-found-text">{{ getMsg() }}</p>
        <router-link to="/">Take me home</router-link>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer.vue'

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  components: { Navbar, Footer },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/config'
.theme-default-content {
  max-width $MQWide
  min-height 100vh - ($footerHeight + $navbarHeight) - 10rem

  .wrapper {
    padding: 5rem
    text-align center
  }
}
</style>
