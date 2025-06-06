export interface MarkdownModule {
  title: string
  date: string
  [key: string]: any // in case you use tags, description, etc.
  default: any // or `DefineComponent<{}, {}, any>` if you want to be more strict
}
// postLoader.ts
const modules = import.meta.glob('@/blog/*.md')

export async function getAllPosts() {
  console.log('modules', modules)
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const mod = (await loader()) as MarkdownModule
      console.log('mod', mod)
      return {
        slug: path.split('/').pop()?.replace('.md', '') ?? '',
        component: mod.default,
        ...mod,
      }
    })
  )
  console.log('posts', posts)
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
