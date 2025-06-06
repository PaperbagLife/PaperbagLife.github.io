<script setup lang="ts">
import { onMounted, ref } from 'vue'

const commentsContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', 'paperbaglife/paperbaglife.github.io') // ← replace this
  script.setAttribute('issue-term', 'pathname') // or 'title', 'url', etc.
  script.setAttribute('theme', 'github-light') // or 'github-dark'
  script.crossOrigin = 'anonymous'
  script.async = true

  if (commentsContainer.value) {
    commentsContainer.value.innerHTML = '' // Clear any existing script if remounting
    commentsContainer.value.appendChild(script)
  }
})
</script>

<template>
  <div ref="commentsContainer"></div>
</template>
