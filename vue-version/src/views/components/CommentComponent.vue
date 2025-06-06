<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const commentsContainer = ref<HTMLElement | null>(null)
const route = useRoute()

function loadUtterances() {
  if (!commentsContainer.value) return
  commentsContainer.value.innerHTML = ''
  const issueName = route.path.split('/').pop() || 'comments'

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', 'paperbaglife/paperbaglife.github.io')
  script.setAttribute('issue-term', issueName) // or 'title', 'url', etc.
  script.setAttribute('theme', 'github-light')
  script.crossOrigin = 'anonymous'
  script.async = true
  commentsContainer.value.appendChild(script)
}

onMounted(loadUtterances)
watch(
  () => route.fullPath,
  () => {
    loadUtterances()
  }
)
</script>

<template>
  <div ref="commentsContainer"></div>
</template>
