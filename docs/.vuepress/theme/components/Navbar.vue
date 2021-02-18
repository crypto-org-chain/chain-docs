<template>
  <header class="navbar">
    <div class="inner">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
      <router-link
        :to="$localePath"
        class="home-link"
      >
        <img
          class="logotype narrow-hide"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <img
          class="logoicon wide-hide"
          v-if="$site.themeConfig.logo"
          :src="$withBase('/logo-icon.svg')"
          :alt="$siteTitle"
        >
        <span
          ref="siteName"
          class="site-name"
          v-if="$siteTitle && !$site.themeConfig.logo"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span>
      </router-link>

      <div
        class="links"
        :style="linksWrapMaxWidth ? {
          'max-width': linksWrapMaxWidth + 'px'
        } : {}"
      >
        <NavLinks class="can-hide"/>
        <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
        />
        <SearchBox
          v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
          @alignRight=true
          :alignRight=true
        />
      </div>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

$headerTextColor = #0b1426

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height 2.5rem
  .search-box
    .suggestions
      right 0 !important
  .desktop-hide
    display none
  .inner
    max-width $MQWide
    margin 0 auto
    display flex
    justify-content space-between
  .home-link
    display block
    padding 6px 0
    float left
  a, span, img
    display inline-block
  .logotype
    height 32px
    width auto
    margin-right 0.8rem
    vertical-align top
  .logoicon
    height 32px
  .site-name
    font-size 1.3rem
    font-weight 600
    color $headerTextColor
    position relative
  .links
    padding-left 1.5rem
    padding-top .2rem
    box-sizing border-box
    background-color $headerBg
    white-space nowrap
    font-size 0.9rem
    position relative
    display flex
    color $headerTextColor
    .search-box
      margin-right 0
      flex: 0 0 auto
      vertical-align top
      input
        border none
        border-radius 4px
        box-shadow 0 2px 10px 4px rgba(0, 0, 0, 0.05)

@media (min-width: $MQWide)
  .navbar
    .narrow-hide
      display inline
    .wide-hide
      display none

@media (max-width: $MQWide)
  .navbar
    .narrow-hide
      display none
    .wide-hide
      display inline

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .desktop-hide
      display inline
    .can-hide
      display none
    .links
      padding-top 0.1rem
      padding-left 1rem
</style>
