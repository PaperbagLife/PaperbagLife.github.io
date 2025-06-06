<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAllPosts } from '@/util/postLoader'

interface BlogPostSummary {
  slug: string
  title: string
  date: string
  [key: string]: any
}

const posts = ref<BlogPostSummary[]>([])

onMounted(async () => {
  posts.value = await getAllPosts()
})
</script>

<template>
  <div class="blog-list">
    <h1>Blog</h1>

    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.slug" class="blog-entry">
        <router-link :to="`/blogs/${post.slug}`">
          <h2>{{ post.title }}</h2>
        </router-link>
        <p class="date">{{ post.date.split('T')[0] }}</p>
      </li>
    </ul>

    <p v-else>Loading posts...</p>
  </div>
</template>

<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.blog-entry {
  margin-bottom: 2rem;
}

.date {
  font-size: 0.9rem;
  color: #777;
}
</style>
