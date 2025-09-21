<template>
  <HeaderNav :mobile="mobile" :mobileNav="mobileNav" :toggleSidebar="toggleSidebar" />
  <router-view class="site-content" :mobile="mobile" />
  <FooterBlock />
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderNav, FooterBlock
  },
  data() {
    return {
      mobile: false,
      mobileNav: false
    }
  },
  created() {
    window.addEventListener("resize", this.checkScreen)
    this.checkScreen()
  },
  methods: {
    checkScreen() {
      if (window.innerWidth <= 768) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
    toggleSidebar() {
      this.mobileNav = !this.mobileNav
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

@font-face {
  font-family: "Retro-Computer";
  src: url('@/assets/fonts/retro_computer_personal_use.ttf');
}

@font-face {
  font-family: "Justice";
  src: url('@/assets/fonts/justice.ttf');
}

:root {
  --bg: #000A00;
  --dGreen: #002F00;
  --green: #004A00;
  --lGreen: #00FF88;
  --red: #EC1935;
  color: white;
  background: var(--bg);
}

.site-content {
  max-width: 1366px;
  margin: auto auto 2em;
}

img {
  max-width: 100%;
}

h2,
summary {
  font-family: "Justice";
  text-transform: uppercase;
  font-size: 32px;
}

h1,
h2,
h3,
summary {
  width: max-content;
}

h3 {
  font-size: 24px;
}

details {
  margin: 50px;
}

p,
a,
li,
div,
h1,
button,
input,
textarea {
  font-family: "Retro-Computer";
  color: white;
}

p,
a,
li,
div,
button,
input,
textarea {
  font-size: 20px;
}

a {
  text-decoration: none;
}

.site-content nav {
  border: 2px solid var(--lGreen);
  max-width: 666px;
}

ol {
  margin: 8px;
}

ol li {
  padding: 8px;
}

ul,
li a {
  padding: 0;
}

ul li {
  margin: 8px 32px;
}

ol li:hover>a,
ol li:hover,
ul li:hover,
ul li:hover>a {
  color: var(--lGreen);
  cursor: pointer;
}

i {
  color: grey;
}

button {
  background: none;
  border: 2px solid var(--lGreen);
  padding: 10px;
  margin: 20px 0;
  transition: all .1s;
  cursor: pointer;
}

button:active {
  border: 2px solid white;
  color: var(--lGreen);
  text-shadow: 4px 4px var(--red);
}

button:hover {
  transform: scale(1.1);
}

.screenshot-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 15px;
}

.underline {
  text-decoration: underline;
}

.animText {
  color: var(--lGreen);
  text-shadow: 4px 4px var(--red);
  animation: hlmTextRotate 8s infinite, hlmTextShadow 5s linear infinite;
}

details p {
  margin-left: 30px;
  color: var(--lGreen);
  cursor: default;
}

details details summary {
  font-size: 28px;
}

/* mobile rules */
@media(max-width:786px) {

  h1,
  h2,
  h3 {
    text-align: center;
  }

  details {
    margin: 50px auto;
    width: 90%;
  }

  .screenshot-grid {
    display: flex; 
    overflow: auto;
  }

  .screenshot-grid img {
    max-width: 33%;
  }

  h1,
  h2,
  h3,
  summary {
    width: initial;
  }

  .site-content nav {
    margin: 0 8px;
  }

  button {
    margin: 20px 8px;
  }

  p,
  i {
    padding: 0 10px;
  }

  details p {
    margin-left: 0px;
  }

}

@keyframes hlmTextShadow {
  from {
    text-shadow: 4px 4px var(--red);
  }

  25% {
    text-shadow: 4px -4px var(--red);
  }

  50% {
    text-shadow: -4px -4px var(--red);
  }

  75% {
    text-shadow: -4px 4px var(--red);
  }

  to {
    text-shadow: 4px 4px var(--red);
  }
}

@keyframes hlmTextRotate {
  from {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
    transform-origin: 50% 50%;
  }

  25% {
    transform: rotate(2deg);
    animation-timing-function: ease-in;
    transform-origin: 50% 50%;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
    transform-origin: 50% 50%;
  }

  75% {
    transform: rotate(-2deg);
    animation-timing-function: ease-in;
    transform-origin: 50% 50%;
  }

  to {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
    transform-origin: 50% 50%;
  }
}
</style>
