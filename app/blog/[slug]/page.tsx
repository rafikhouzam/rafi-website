import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { useMDXComponents } from "@/components/mdx-components"

const postsDirectory = path.join(process.cwd(), "content/blog")

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")

  // compileMDX v5 with App Router
  const { content, frontmatter } = await compileMDX<{
    title: string
    date?: string
    description?: string
  }>({
    source,
    options: { parseFrontmatter: true },
    components: useMDXComponents,
  })
//console.log(content)

  return (
  <article className="blog-content max-w-3xl mx-auto">
    <h2>{<b>{frontmatter.title}</b>}</h2>
    <p className="text-gray-500">{frontmatter.date}</p>
    {content}
  </article>

)

}
