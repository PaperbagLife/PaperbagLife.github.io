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
  { name: 'Interests', icon: 'interests', route: '/interests' },
  { name: 'Games', icon: 'videogame_asset', route: '/games' }
]
</script>

<template>
  <header :class="{ header: showSideNav }">
    <div v-if="type !== 'xs'" class="mt-3 mx-2 nav-bar d-flex justify-content-start">
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
        <template v-for="page in pages" :key="page.name">
          <div class="xs-nav row mx-2">
            <span class="material-icons-outlined md-24">{{ page.icon }}</span>
            <router-link @click="showSideNav = false" :to="page.route" class="xs-nav row mx-2">{{
              page.name
            }}</router-link>
          </div>
        </template>
      </div>
    </div>
  </header>
  <div class="mt-4 viewport">
    <RouterView />
  </div>
</template>

<style scoped>
.viewport {
  max-height: 85vh;
  overflow: auto;
}
.header {
  max-height: 15vh;
  background-color: #66ccff;
}
.nav-menu {
  margin-top: -1px;
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
