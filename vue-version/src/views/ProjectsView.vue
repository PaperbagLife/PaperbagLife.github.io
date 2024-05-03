<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { projectEntries } from '../util/consts'
const { width, type } = useBreakpoints()
const COLUMN_FILL_RATIO = 0.84
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="ml-2">Projects</h1>
      <div class="row mx-0">
        <div
          v-for="entry in projectEntries"
          :key="entry.title"
          class="border-top"
          :class="type === 'xs' ? 'col-12' : 'col-6'"
        >
          <p>
            <b>{{ entry.title }}</b> <br />
            <i>{{ entry.timeline }}</i> <br />
            <img
              v-if="entry.img"
              :src="entry.img"
              :width="(type === 'xs' ? width : width / 2) * COLUMN_FILL_RATIO"
            />
            <br />
            {{ entry.description }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
