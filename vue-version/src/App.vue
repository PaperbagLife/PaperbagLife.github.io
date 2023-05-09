<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from './util/dimensions'
import { RouterLink, RouterView } from 'vue-router'
const { type } = useBreakpoints()

const showSideNav = ref(false)

type Page = {
  name: string
  icon: string
  route: string
}
const pages: Page[] = [
  { name: 'Home', icon: 'home', route: '/' },
  { name: 'Coursework', icon: 'book', route: '/coursework' },
  { name: 'Projects', icon: 'collections', route: '/projects' },
  { name: 'Interests', icon: 'interests', route: '/interests' }
]
</script>

<template>
  <header>
    <div v-if="type !== 'xs'" class="my-3 mx-2 nav-bar d-flex justify-content-start">
      <template v-for="page in pages" :key="page.name">
        <router-link class="router-link mx-2" :to="page.route">
          <label class="d-flex">
            <span class="material-icons-outlined md-24">{{ page.icon }}</span>
            <span class="page-name">{{ page.name }}</span>
          </label>
        </router-link>
      </template>
    </div>
    <div v-else>
      <div @click="showSideNav = !showSideNav" class="ml-3 mt-3 material-icons-outlined md-24">
        {{ showSideNav ? 'close' : 'menu' }}
      </div>
      <div v-if="showSideNav" class="col nav-menu">
        <div></div>
        <div class="xs-nav row mx-2">
          <span class="material-icons-outlined md-24">home</span>
          <router-link @click="showSideNav = false" to="/" class="xs-nav row mx-2"
            >Home</router-link
          >
        </div>
        <div class="xs-nav row mx-2">
          <span class="material-icons-outlined md-24">book</span>
          <router-link @click="showSideNav = false" to="/coursework" class="xs-nav row mx-2"
            >Coursework</router-link
          >
        </div>

        <div class="xs-nav row mx-2">
          <span class="material-icons-outlined md-24">collections</span>
          <router-link @click="showSideNav = false" to="/projects" class="xs-nav row mx-2"
            >Projects</router-link
          >
        </div>

        <div class="xs-nav row mx-2">
          <span class="material-icons-outlined md-24">interests</span>
          <router-link @click="showSideNav = false" to="/interests" class="xs-nav row mx-2"
            >Interests</router-link
          >
        </div>
      </div>
    </div>
  </header>
  <div class="mt-4 h-100">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-menu {
  background: #66ccff;
  position: fixed;
  z-index: 1;
}
.xs-nav {
  font-size: larger;
  color: white;
}

span.material-icons-outlined {
  color: #66ccff;
}

.router-link {
  color: #66ccff;
  cursor: pointer;
}

.router-link label {
  cursor: pointer;
}

.router-link:hover {
  text-decoration: none;
  filter: brightness(80%);
}

.xs-nav span.material-icons-outlined {
  align-self: center;
  color: white;
}
</style>
