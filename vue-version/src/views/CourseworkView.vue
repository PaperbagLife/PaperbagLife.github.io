<script setup lang="ts">
import { useBreakpoints } from '../util/dimensions'
import { onMounted } from 'vue'
import { semesters } from '../util/consts'
const { type } = useBreakpoints()
onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <main>
    <div class="col mt-2">
      <h1 class="mx-2">Coursework</h1>
      <div class="row mx-0">
        <template v-for="semester in semesters" :key="semester.name">
          <div class="border-top py-2" :class="type === 'xs' ? 'col-12' : 'col-6'">
            <p>
              <b>{{ semester.name }}</b>
            </p>
            <p class="mb-1" v-for="course in semester.courses" :key="course">{{ course }} <br /></p>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>
