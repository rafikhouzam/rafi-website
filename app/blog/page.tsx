import fs from "fs"
import path from "path"
import matter from "gray-matter"
import BlogCard from "@/components/BlogCard"

interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  pinned: boolean
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export default function BlogPage() {
  const files = fs.readdirSync(postsDirectory)

  const posts: PostMeta[] = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      pinned: Boolean(data.pinned),
    }
  })
  posts.sort((a: PostMeta, b: PostMeta) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: PostMeta) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </section>
  )
}
