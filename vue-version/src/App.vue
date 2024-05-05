<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from './util/dimensions'
import { RouterLink, RouterView } from 'vue-router'
const { type } = useBreakpoints()

type Page = {
  name: string
  icon: string
  route: string
}

const homePage: Page = { name: 'Home', icon: 'home', route: '/' }
const pages: Page[] = [
  { name: 'Coursework', icon: 'book', route: '/coursework' },
  { name: 'Projects', icon: 'collections', route: '/projects' }
]

const morePages: Page[] = [
  { name: 'Interests', icon: 'interests', route: '/interests' },
  { name: 'Demo', icon: 'construction', route: '/demo' },
  { name: 'Web Games', icon: 'gamepad', route: '/games' }
]

const morePagesExpanded = ref(false)

function onMoreMenuClick() {
  morePagesExpanded.value = !morePagesExpanded.value
}

function onRouterLinkClick() {
  morePagesExpanded.value = false
}
</script>

<template>
  <header>
    <router-link
      @click="onRouterLinkClick"
      class="mt-2 home-route router-link ml-3 px-2"
      :to="homePage.route"
    >
      <label class="d-flex my-1">
        <span class="material-icons-outlined">{{ homePage.icon }}</span>
        <span class="home-name">{{ homePage.name }}</span>
      </label>
    </router-link>
    <div v-if="type !== 'xs'" class="p-2 nav-bar d-flex align-items-center justify-content-end">
      <template v-for="page in pages" :key="page.name">
        <router-link @click="onRouterLinkClick" class="router-link mx-2 px-2" :to="page.route">
          <label class="d-flex my-1">
            <span class="material-icons-outlined">{{ page.icon }}</span>
            <span class="page-name">{{ page.name }}</span>
          </label>
        </router-link>
      </template>
      <button class="more-pages-btn btn mx-2 py-0 btn-sm d-flex" @click="onMoreMenuClick">
        <label class="d-flex my-1">
          <span class="material-icons-outlined" :class="{ rotate: morePagesExpanded }"
            >more_horiz</span
          >
          <span class="page-name">{{ morePagesExpanded ? 'Close' : 'More' }}</span>
        </label>
      </button>
      <div class="expanded-menu d-flex" :class="{ show: morePagesExpanded }">
        <div class="col px-0">
          <template v-for="page in morePages" :key="page.name">
            <router-link
              @click="onRouterLinkClick"
              class="router-link row my-1 mx-2 px-2"
              :to="page.route"
            >
              <label class="d-flex my-1">
                <span class="material-icons-outlined">{{ page.icon }}</span>
                <span class="page-name">{{ page.name }}</span>
              </label>
            </router-link>
          </template>
        </div>
      </div>
    </div>
    <div v-else>
      <button
        class="more-pages-btn mobile-more-btn btn mt-2 mx-2 py-0 btn-sm d-flex"
        @click="onMoreMenuClick"
      >
        <label class="d-flex my-1">
          <span class="material-icons-outlined" :class="{ rotate: morePagesExpanded }"
            >more_horiz</span
          >
          <span class="page-name">{{ morePagesExpanded ? 'Close' : 'More' }}</span>
        </label>
      </button>
      <div
        v-if="type === 'xs'"
        class="col h-100 pt-5 nav-menu"
        :class="{ show: morePagesExpanded }"
      >
        <template v-for="page in [...pages, ...morePages]" :key="page.name">
          <div class="xs-nav row mx-2">
            <span class="material-icons-outlined">{{ page.icon }}</span>
            <router-link @click="onRouterLinkClick" :to="page.route" class="xs-nav row mx-2">
              {{ page.name }}
            </router-link>
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
.nav-bar {
  position: fixed;
  width: 100%;
  z-index: 1;
  background: white;
}
.home-route {
  position: fixed;
  z-index: 2;
}

.more-pages-btn {
  border: none;
  background-color: aliceblue;
  color: #66ccff;
  width: 80px;
  border-radius: 1rem;
  box-shadow: none;
}

.mobile-more-btn {
  z-index: 2;
  right: 1rem;
  position: fixed;
}

.more-pages-btn:hover {
  filter: brightness(80%);
}
.more-pages-btn label {
  cursor: pointer;
}

.more-pages-btn .material-icons-outlined {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.1, 1);
}

.more-pages-btn .material-icons-outlined.rotate {
  transform: rotate(90deg);
}

.expanded-menu {
  position: fixed;
  right: 0.5rem;
  top: 5rem;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.1, 1), opacity 0.4s;
  z-index: 1;
  background-color: aliceblue;
  border-radius: 1rem;
}

.expanded-menu.show {
  opacity: 1;
  transform: translateY(-2rem);
}

.viewport {
  padding-top: 40px;
  overflow: auto;
}
.nav-menu {
  background: #66ccff;
  position: fixed;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.1, 1);
}

.nav-menu.show {
  opacity: 1;
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
  background-color: aliceblue;
  border-radius: 1rem;
  align-items: center;
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

.xs-nav .btn.dropdown-toggle {
  font-size: larger;
  color: white;
  background: transparent;
}
</style>
