export interface MarkdownModule {
  title: string
  date: string
  tags: string[]
  default: any // or `DefineComponent<{}, {}, any>` if you want to be more strict
}
// postLoader.ts
const modules = import.meta.glob('@/blog/*.md')

export async function getAllPosts() {
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const mod = (await loader()) as MarkdownModule
      return {
        slug: path.split('/').pop()?.replace('.md', '') ?? '',
        component: mod.default,
        ...mod,
      }
    })
  )
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return posts
}

export async function getPostBySlug(slug: string) {
  const key = Object.keys(modules).find((path) => path.endsWith(`${slug}.md`))
  if (!key) throw new Error('Post not found')
  const mod = (await modules[key]()) as MarkdownModule
  return {
    component: mod.default,
    ...mod,
  }
}
