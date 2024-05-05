<script setup lang="ts">
import ProjectsComponent from './components/ProjectsComponent.vue'
import { games } from '../util/consts'
import { onMounted } from 'vue'
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Interests</h1>
      <ProjectsComponent :entries="games" />
    </div>
  </main>
</template>
