<script setup lang="ts">
import router from '@/router'
import type { Project } from '@/util/consts'
import { useBreakpoints } from '@/util/dimensions'
const { type } = useBreakpoints()

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
  <div class="row gx-5">
    <div
      v-for="entry in props.entries"
      :key="entry.title"
      class="border-top pt-3 pb-2"
      :class="type === 'xs' ? 'col-12' : 'col-6'"
    >
      <p>
        <b>{{ entry.title }}</b> <br />
        <i v-if="entry.timeline">{{ entry.timeline }}</i> <br />
        <router-link v-if="entry.link?.startsWith('/')" :to="entry.link">Link <br /></router-link>
        <a v-else-if="entry.link" :href="entry.link">Link <br /></a>
        <img
          v-if="entry.img && !entry.youtube"
          :src="entry.img"
          @click="onImgClick(entry.route)"
          class="media my-2"
          :class="entry.route ? 'img-link' : ''"
        />
        <iframe
          v-if="entry.youtube"
          :src="entry.youtube"
          class="media my-2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        {{ entry.description }} <br />
        <router-link v-if="entry.route" class="router-link" :to="entry.route">
          Click to play
        </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.media {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.5rem;
}

.img-link {
  cursor: pointer;
}
</style>
