import Link from "next/link"

interface BlogCardProps {
  slug: string
  title: string
  date: string
  description: string
  className?: string
  pinned?: boolean
}

export default function BlogCard({
  slug,
  title,
  date,
  description,
  className = "",
  pinned = false,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className={`card ${className}`}>
        <div className="project-card-content">
          <header className="mb-6">
            <div className="flex items-center gap-2">
              {pinned && <span className="text-lg">📌</span>}
                <h3 className="text-3xl font-bold">{title}</h3>
            </div>
          </header>
          <p className="tag inline-flex">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
