<script setup lang="ts">
import ProjectsComponent from './components/ProjectsComponent.vue'
import { games } from '../util/consts'
import { onMounted } from 'vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main class="page">
    <div class="col">
      <h1 class="mb-3">Games</h1>
      <ProjectsComponent :entries="games" />
    </div>
  </main>
</template>
