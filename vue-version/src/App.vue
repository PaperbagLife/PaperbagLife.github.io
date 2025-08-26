<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBreakpoints } from './util/dimensions'
import { RouterLink, RouterView } from 'vue-router'
import { useHeaderVisibility } from './util/headerVisibility'

const { headerVisible } = useHeaderVisibility()
const { type } = useBreakpoints()

type Page = {
  name: string
  icon: string
  route: string
}

const homePage: Page = { name: 'Home', icon: 'home', route: '/' }
const pages: Page[] = [
  { name: 'Blogs', icon: 'article', route: '/blogs' },
  { name: 'Resume', icon: 'description', route: '/resume' },
  { name: 'Projects', icon: 'collections', route: '/projects' },
]

const morePages: Page[] = [
  { name: 'Coursework', icon: 'book', route: '/coursework' },
  { name: 'Interests', icon: 'interests', route: '/interests' },
  { name: 'Web Games', icon: 'gamepad', route: '/games' },
  { name: 'Demo', icon: 'construction', route: '/demo' },
  { name: 'Timer', icon: 'timer', route: '/timer' },
]

const morePagesExpanded = ref(false)

function onMoreMenuClick() {
  morePagesExpanded.value = !morePagesExpanded.value
}

function onRouterLinkClick() {
  morePagesExpanded.value = false
}

onMounted(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  document.body.setAttribute('data-bs-theme', isDark ? 'dark' : 'light')
})
</script>

<template>
  <header v-if="headerVisible">
    <div v-if="type !== 'xs'" class="nav-bar mt-2 d-flex align-items-center justify-content-end">
      <template v-for="page in pages" :key="page.name">
        <router-link
          @click="onRouterLinkClick"
          class="router-link btn btn-dark mx-2 py-0 btn-sm"
          :to="page.route"
        >
          <label class="d-flex my-1">
            <span class="material-icons-outlined">{{ page.icon }}</span>
            <span class="page-name">{{ page.name }}</span>
          </label>
        </router-link>
      </template>
      <button class="more-pages-btn btn btn-dark mx-2 py-0 btn-sm d-flex" @click="onMoreMenuClick">
        <label class="d-flex my-1">
          <span class="material-icons-outlined" :class="{ rotate: morePagesExpanded }"
            >more_horiz</span
          >
          <span class="page-name">{{ morePagesExpanded ? 'Close' : 'More' }}</span>
        </label>
      </button>
      <div class="expanded-menu" :class="{ show: morePagesExpanded }">
        <div class="d-flex flex-column">
          <template v-for="page in morePages" :key="page.name">
            <router-link
              @click="onRouterLinkClick"
              class="router-link btn btn-dark row my-1 mx-2 px-2 py-0"
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
        class="more-pages-btn mobile-more-btn btn btn-dark mt-2 mx-2 py-0 btn-sm d-flex"
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
          <div class="xs-nav row mx-3">
            <span class="material-icons-outlined col-auto px-0">{{ page.icon }}</span>
            <router-link
              @click="onRouterLinkClick"
              :to="page.route"
              class="col-auto px-0 xs-nav mx-2"
            >
              {{ page.name }}
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <router-link
      @click="onRouterLinkClick"
      class="mt-2 home-route btn btn-dark router-link btn-sm py-0 mx-2"
      :to="homePage.route"
    >
      <label class="d-flex my-1">
        <span class="material-icons-outlined">{{ homePage.icon }}</span>
        <span class="home-name">{{ homePage.name }}</span>
      </label>
    </router-link>
  </header>

  <div class="viewport" :class="{ 'no-header': !headerVisible }">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  z-index: 2;
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

.more-pages-btn:hover,
.more-pages-btn.btn:active {
  color: #66ccff;
  background-color: aliceblue;
  filter: brightness(80%);
}

.mobile-more-btn {
  z-index: 2;
  right: 1rem;
  position: fixed;
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
  pointer-events: none;
}

.expanded-menu.show {
  opacity: 1;
  transform: translateY(-2rem);
  pointer-events: all;
}

.viewport {
  padding-top: 40px;
  overflow: auto;
}
.viewport.no-header {
  padding-top: 0;
}

.no-header-home {
  position: absolute;
  z-index: 2;
  left: 1rem;
}

.nav-menu {
  min-width: 60vw;
  background: #66ccff;
  position: fixed;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.1, 1);
  pointer-events: none;
}

.nav-menu.show {
  opacity: 1;
  pointer-events: all;
}

.xs-nav {
  font-size: large;
  color: white;
}

span.material-icons-outlined {
  color: #66ccff;
}

.router-link {
  color: #66ccff;
  background-color: aliceblue;
  border-radius: 1rem;
  align-items: center;
}

.router-link.btn {
  border: none;
}

.router-link.btn:hover {
  color: #66ccff;
  background: aliceblue;
  filter: brightness(80%);
}

.router-link label {
  cursor: pointer;
}

.router-link:hover {
  text-decoration: none;
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
