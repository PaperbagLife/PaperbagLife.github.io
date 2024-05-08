<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Project } from '@/util/consts'

const SCROLL_PROJECT_WIDTH = 300
defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <swiper-container
    ref="swiperContainer"
    loop="true"
    navigation="true"
    pagination="true"
    slides-per-view="1"
  >
    <swiper-slide class="d-flex" v-for="project in projects" :key="project.title">
      <div class="slide-wrapper col-12 justify-content-center">
        <div class="row mx-auto">{{ project.title }}</div>
        <img
          :src="project.img"
          class="row"
          :width="SCROLL_PROJECT_WIDTH"
          :height="SCROLL_PROJECT_WIDTH / 2"
        />
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>
swiper-container {
  --swiper-theme-color: #66ccff;
  --swiper-pagination-bottom: 0;
}
.slide-wrapper {
  display: grid;
}
</style>
