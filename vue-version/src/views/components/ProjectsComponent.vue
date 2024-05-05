<script setup lang="ts">
import { type Project, COLUMN_FILL_RATIO } from '@/util/consts'
import { useBreakpoints } from '@/util/dimensions'
const { width, type } = useBreakpoints()

const props = defineProps<{
  entries: Project[]
}>()
</script>
<template>
  <div class="row mx-0">
    <div
      v-for="entry in props.entries"
      :key="entry.title"
      class="border-top"
      :class="type === 'xs' ? 'col-12' : 'col-6'"
    >
      <p>
        <b>{{ entry.title }}</b> <br />
        <i v-if="entry.timeline">{{ entry.timeline }}</i> <br />
        <a v-if="entry.link" :href="entry.link">Demo</a>
        <img
          v-if="entry.img"
          :src="entry.img"
          :width="(type === 'xs' ? width : width / 2) * COLUMN_FILL_RATIO"
        />
        <br />
        {{ entry.description }}
        <router-link v-if="entry.route" class="router-link mx-2 px-2" :to="entry.route">
          Link
        </router-link>
      </p>
    </div>
  </div>
</template>
