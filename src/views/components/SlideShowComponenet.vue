<script setup lang="ts">
import router from '@/router'
import type { Project } from '@/util/consts'

const props = defineProps<{
  projects: Project[]
  route: string
  projectWidth: number
}>()

function routeToPage() {
  router.push(props.route)
}
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
        <div class="row justify-content-center mx-auto">{{ project.title }}</div>
        <img
          :src="project.img"
          class="project-img mx-auto row"
          @click="routeToPage"
          :width="projectWidth"
          :height="projectWidth / 2"
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
.project-img:hover {
  cursor: pointer;
}
</style>
