<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="main">
        <div class="logo">
          <a href="/">
            <img
              class="footer-logo"
              :src="$withBase('/logotype-white.svg')"
              alt="logo-icon-white"
            />
          </a>
        </div>
        <div class="navLinks">
          <div class="column">
            <h3>Developers</h3>
            <!-- <div class="link">
              <a href="/explorer">
                Explorer
              </a>
            </div> -->
            <div class="link">
              <a href="/docs">
                Documentation
              </a>
            </div>
            <div class="link">
              <a href="/faucet">
                Faucet
              </a>
            </div>
          </div>
          <div class="column">
            <h3>Wallets</h3>
            <div class="link">
              <a href="/wallets">
                Wallets
              </a>
            </div>
          </div>
          <div class="column">
            <h3>Partners</h3>
            <div class="link">
              <a href="/partners">
                Partners
              </a>
            </div>
          </div>
          <div class="column">
            <h3>Community</h3>
            <div class="link">
              <a href="/community">
                Community
              </a>
            </div>
          </div>
        </div>
        <div class="socials">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/cryptocom">
            <img :src="$withBase('/social/twitter.svg')" alt="twitter" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CryptoComOfficial">
            <img :src="$withBase('/social/facebook.svg')" alt="facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cryptocomofficial/">
            <img :src="$withBase('/social/instagram.svg')" alt="instagram" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://hk.linkedin.com/company/cryptocom">
            <img :src="$withBase('/social/linkedin.svg')" alt="linkedin" />
          </a>
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCOMprzxakZOqmY23LYIawmg"
          >
            <img :src="$withBase('/social/youtube.svg')" alt="youtube" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/Crypto_com/">
            <img :src="$withBase('/social/reddit.svg')" alt="reddit" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/pahqHz26q4">
            <img :src="$withBase('/social/discord.svg')" alt="discord" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/CryptoComOfficial">
            <img :src="$withBase('/social/telegram.svg')" alt="telegram" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://open.kakao.com/o/gGH1WQM">
            <img :src="$withBase('/social/kakaotalk.svg')" alt="kakaotalk" />
          </a>
        </div>
      </div>
      <p class="copyright">
        Copyright © {{ currentYear }} Crypto.org. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      linksWrapMaxWidth: null,
    };
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/config'
$light-color = rgba(255, 255, 255, 50%)
.footer {
  min-height: $footerHeight;
  // width: 100%;
  padding: 28px 15px;
  background-color: #0b1426;

  .wrapper {
    max-width $MQWide
    margin 0 auto
  }

  .main {
    display flex
    justify-content space-between
    margin-bottom 3rem
    .navLinks {
      display flex
      .column {
        margin 0 2.5rem
        h3 {
          margin: 0;
          margin-bottom: 16px;
          font-size 16px;
          color: white;
          font-weight: 600;
        }
        .link {
          margin-bottom: 12px;
          font-size 14px;
          a {
            color: $light-color;
            font-weight: 500;
          }
          a:hover {
            color: white;
          }
        }
      }
    }

    .socials {
      max-width: 420px;
      margin-bottom: 32px;
      text-align: left;
      & > a {
        display: inline-block;
        margin: 0 20px 16px;
        font-size: 16px;
        opacity: 0.6;
      }
    }
  }

  .copyright {
    width: inherit;
    margin: 0;
    color: $light-color;
    font-weight: 600;
    font-size: 12px;
  }
}
@media (max-width: $MQMobile) {
  .footer {
    .main {
      flex-direction column
      margin-bottom 2rem

      .navLinks {
        flex-direction column
      }

      .navLinks {
        margin 2rem 1rem
        .column {
          margin 0
        }
      }

      .socials {
        margin-bottom 0
      }
    }
  }
}
</style>
