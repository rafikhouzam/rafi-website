import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export default function BlogPage() {
  const files = fs.readdirSync(postsDirectory)

  const posts: PostMeta[] = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(".md", ""),
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
    }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500">{post.date}</p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
