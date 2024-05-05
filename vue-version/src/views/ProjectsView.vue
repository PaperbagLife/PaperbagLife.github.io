<script setup lang="ts">
import { projectEntries } from '../util/consts'
import ProjectsComponent from './components/ProjectsComponent.vue'
import { onMounted } from 'vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Projects</h1>
      <ProjectsComponent :entries="projectEntries" />
    </div>
  </main>
</template>

<style></style>
