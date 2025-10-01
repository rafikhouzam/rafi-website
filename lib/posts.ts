import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  return files.map((filename) => {
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
}

export function getPostsSortedByDate() {
  const posts = getAllPosts()
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getLatestPost() {
  return getPostsSortedByDate()[0]
}
