<template>
  <header>
    <div class="grid1">
      <router-link to="/"><img alt="Hotline Suite logo" src="@/assets/icons/logo-placeholder2.png"></router-link>
    </div>
    <nav v-if="!mobile">
      <router-link v-for="cat in categories" :to="cat.to">{{ cat.title }}</router-link>
    </nav>
    <div class="grid3" @click="toggleSidebar" v-else :class="{ 'icon-active': mobileNav }">
      <img class="menu-mobile" src="@/assets/icons/burger-menu.png">
    </div>
    <transition name="mobile-nav">
      <nav v-if="mobileNav" class="sidebar">
        <router-link v-for="cat in categories" :to="cat.to">{{ cat.title }}</router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
import categories from '@/assets/data/categories.json'

export default {
  name: 'HeaderNav',
  data() {
    return {
      categories: categories,
    }
  },
  props: ['mobile', 'mobileNav', 'toggleSidebar']
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--dGreen);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  text-align: center;
  transition: .5s all;
  z-index: 1;
}

header img {
  max-height: 100px;

  @media(max-width:750px) {
    max-height: 75px;
  }
}

.grid1 {
  justify-self: start;
}

nav {
  display: grid;
  grid-template-columns: max-content max-content max-content;
}

.grid3 {
  justify-self: end;
  margin: 16px 32px;
  transition: .6s ease all;
}

.grid3 img {
  width: 35px;
}

.icon-active {
  transform: rotate(-90deg);
}

a {
  text-decoration: none;
  padding: 20px 24px;
}

nav a.router-link-exact-active,
nav a:hover {
  background: var(--green);
}

.sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 300px;
  height: 100%;
  top: 79px;
  right: 0;
}

.sidebar a {
  margin-right: 0;
  background: var(--dGreen);
  border-top: 1px solid var(--lGreen);
}

.sidebar a:last-of-type {
  border-bottom: 1px solid var(--lGreen);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: .8s ease-out all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(250px);
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
  transform: translateX(0)
}
</style>
