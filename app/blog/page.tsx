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
    <div className="blog-landing">
      {/* Hero Section */}
      <section className="blog-landing py-10 text-center">
        {/* subtle gradient glow background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-violet-500/10 blur-3xl"></div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
          Blog
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Thoughts and reflections on life, work, and everything else in between.
        </p>
        <div className="gradient-bar"></div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}
