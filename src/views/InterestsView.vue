<script setup lang="ts">
import { interests } from '../util/consts'
import { onMounted } from 'vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main class="page">
    <div class="col">
      <h1 class="mb-3">Interests</h1>
      <ProjectsComponent :entries="interests" />
    </div>
  </main>
</template>
