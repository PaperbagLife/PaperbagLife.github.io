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

type GamePage = {
  name: string
  route: string
}

const games: GamePage[] = [
  { name: 'Shooter', route: '/games/shooter' },
  { name: 'Turn based', route: '/games/turnbased' }
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
      <div class="dropdown">
        <button
          class="btn btn-sm d-flex dropdown-toggle p-0 align-items-center"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="material-icons-outlined md-24">gamepad</span>
          Games
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link
            v-for="game in games"
            :key="game.name"
            class="dropdown-item px-2 d-inline-block router-link"
            :to="game.route"
          >
            <label class="d-flex">
              <span class="page-name">{{ game.name }}</span>
            </label>
          </router-link>
        </div>
      </div>
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
  <div class="viewport">
    <RouterView />
  </div>
</template>

<style scoped>
.dropdown-item.active,
.dropdown-item:active {
  background-color: white;
}
.btn.dropdown-toggle {
  font-size: 15px;
  color: #66ccff;
  background: transparent;
}
.btn.dropdown-toggle:focus {
  box-shadow: none;
}
.btn.dropdown-toggle:hover {
  filter: brightness(80%);
}
.dropdown-item {
  height: 30px;
}
.dropdown-menu {
  min-width: 5rem;
}
.viewport {
  max-height: 90vh;
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
