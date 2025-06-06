<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '@/util/postLoader'

const route = useRoute()
const PostComponent = shallowRef<null | object>(null)
const error = ref<string | null>(null)

async function loadPost(slug: string) {
  error.value = null
  PostComponent.value = null

  try {
    const { component } = await getPostBySlug(slug)
    PostComponent.value = component
  } catch (err) {
    error.value = 'Blog post not found.'
  }
}

// Load post on initial mount
onMounted(() => {
  loadPost(route.params.slug as string)
})

// Reload post if route changes (e.g., user navigates to different slug)
watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) loadPost(newSlug as string)
  }
)
</script>

<template>
  <div class="blog-post">
    <div v-if="error" class="error-message">{{ error }}</div>

    <component v-else-if="PostComponent" :is="PostComponent" />

    <div v-else>Loading...</div>
  </div>
</template>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.error-message {
  color: red;
  font-weight: bold;
}
</style>
