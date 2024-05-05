<script setup lang="ts">
import { interests } from '../util/consts'
import { onMounted } from 'vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Interests</h1>
      <ProjectsComponent :entries="interests" />
    </div>
  </main>
</template>
