<script setup lang="ts">
import { ref } from 'vue'
import { useBreakpoints } from './util/dimensions'
import { RouterLink, RouterView } from 'vue-router'
const { type } = useBreakpoints()

const showSideNav = ref(false)
</script>

<template>
  <header>
    <div v-if="type !== 'xs'" class="my-3 mx-2 nav-bar d-flex justify-content-end">
      <router-link to="/" class="mx-2">Home</router-link>
      <router-link to="/coursework" class="mx-2">Coursework</router-link>
      <router-link to="/projects" class="mx-2">Projects</router-link>
      <router-link to="/interests" class="mx-2">Interests</router-link>
    </div>
    <div v-else>
      <div @click="showSideNav = !showSideNav" class="material-icons md-24">
        {{ showSideNav ? 'close' : 'menu' }}
      </div>
      <div v-if="showSideNav" class="col nav-menu">
        <router-link @click="showSideNav = false" to="/" class="row mx-2">Home</router-link>
        <router-link @click="showSideNav = false" to="/coursework" class="row mx-2"
          >Coursework</router-link
        >
        <router-link @click="showSideNav = false" to="/projects" class="row mx-2"
          >Projects</router-link
        >
        <router-link @click="showSideNav = false" to="/interests" class="row mx-2"
          >Interests</router-link
        >
      </div>
    </div>
  </header>
  <div class="mt-4">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-menu {
  background: #66ccff;
  position: fixed;
  z-index: 1;
}
</style>
