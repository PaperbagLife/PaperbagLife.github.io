<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Project } from '@/util/consts'

const SCROLL_PROJECT_WIDTH = 300
const props = defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <swiper-container navigation="true" pagination="true" slides-per-view="1">
    <swiper-slide
      class="d-flex justify-content-center"
      v-for="project in projects"
      :key="project.title"
    >
      <img
        :src="project.img"
        class="px-2"
        :width="SCROLL_PROJECT_WIDTH"
        :height="SCROLL_PROJECT_WIDTH / 2"
      />
    </swiper-slide>
  </swiper-container>
</template>

<style scoped></style>
