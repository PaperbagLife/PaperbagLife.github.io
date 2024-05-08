<script setup lang="ts">
import router from '@/router'
import { type Project, COLUMN_FILL_RATIO } from '@/util/consts'
import { useBreakpoints } from '@/util/dimensions'
const { width, type } = useBreakpoints()

const props = defineProps<{
  entries: Project[]
}>()

function onImgClick(route?: string) {
  if (route) {
    router.push(route)
  }
}
</script>
<template>
  <div class="row mx-0">
    <div
      v-for="entry in props.entries"
      :key="entry.title"
      class="border-top py-1"
      :class="type === 'xs' ? 'col-12' : 'col-6'"
    >
      <p>
        <b>{{ entry.title }}</b> <br />
        <i v-if="entry.timeline">{{ entry.timeline }}</i> <br />
        <a v-if="entry.link" :href="entry.link">Demo</a>
        <a v-else><br /></a>
        <img
          v-if="entry.img"
          :src="entry.img"
          @click="onImgClick(entry.route)"
          :width="(type === 'xs' ? width : width / 2) * COLUMN_FILL_RATIO"
          :height="((type === 'xs' ? width : width / 2) * COLUMN_FILL_RATIO) / 2"
          :class="entry.route ? 'img-link' : ''"
        />
        <br />
        {{ entry.description }} <br />
        <router-link v-if="entry.route" class="router-link" :to="entry.route">
          Click to Play
        </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.img-link {
  cursor: pointer;
}
</style>
