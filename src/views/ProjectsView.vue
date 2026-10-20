<script setup lang="ts">
import { projectEntries } from '../util/consts'
import ProjectsComponent from './components/ProjectsComponent.vue'
import { onMounted } from 'vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main class="page">
    <div class="col">
      <h1 class="mb-3">Projects</h1>
      <ProjectsComponent :entries="projectEntries" />
    </div>
  </main>
</template>

<style></style>
