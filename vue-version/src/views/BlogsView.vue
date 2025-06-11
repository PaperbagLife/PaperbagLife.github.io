<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getAllPosts } from '@/util/postLoader'

interface BlogPostSummary {
  slug: string
  title: string
  date: string
  tags: string[]
}

const posts = ref<BlogPostSummary[]>([])

onMounted(async () => {
  posts.value = await getAllPosts()
})

const filterTag = ref<string | null>(null)

// Compute all unique tags from posts
const allTags = computed(() => {
  const tagSet = new Set<string>()
  posts.value.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet)
})

// Filtered posts by tag (or all if no tag selected)
const filteredPosts = computed(() => {
  console.log('Filtering posts with tag:', filterTag.value)
  if (!filterTag.value) return posts.value
  return posts.value.filter((post) => post.tags.includes(filterTag.value!))
})

const pinnedPosts = computed(() => {
  return filteredPosts.value.filter((post) => post.tags.includes('Pinned'))
})
</script>

<template>
  <div class="col mx-3 blog-entries">
    <div class="row align-items-center justify-content-between">
      <div class="blog-title col-auto">Blog posts</div>
      <!-- Tag filter select -->
      <div class="mb-2 filter-wrapper col-auto">
        <label for="tag-filter" class="me-2">Filter by tag:</label>
        <select
          id="tag-filter"
          v-model="filterTag"
          class="form-select form-select-sm d-inline-block w-auto"
        >
          <option :value="null">All</option>
          <option v-for="tag in allTags" :key="tag" :value="tag">{{ tag }}</option>
        </select>
      </div>
    </div>
    <div v-if="posts.length">
      <div v-if="pinnedPosts.length">
        <div class="py-2">Pinned Blogs</div>
        <div v-for="post in pinnedPosts" :key="post.slug" class="blog-entry">
          <router-link class="link" :to="`/blogs/${post.slug}`">
            <h4>{{ post.title }}</h4>
          </router-link>
          <div class="date">{{ post.date.split('T')[0] }}</div>
        </div>
      </div>
      <div v-if="filteredPosts.length">
        <div class="py-2">All Blogs</div>
        <div v-for="post in filteredPosts" :key="post.slug" class="blog-entry">
          <router-link class="link" :to="`/blogs/${post.slug}`">
            <h4>{{ post.title }}</h4>
          </router-link>
          <div class="date">{{ post.date.split('T')[0] }}</div>
        </div>
      </div>
    </div>
    <p v-else>Loading posts...</p>
  </div>
</template>

<style scoped>
.blog-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
}
.filter-wrapper {
  display: inline-block;
}
.blog-entries {
  margin: 0 auto;
  max-width: 640px;
}
.blog-entry {
  margin-bottom: 1rem;
  width: fit-content;
}

.link {
  text-decoration: none;
  color: #6cf;
}

.date {
  color: #777;
}
</style>
