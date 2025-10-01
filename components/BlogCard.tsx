import Link from "next/link"

interface BlogCardProps {
  slug: string
  title: string
  date: string
  description: string
  className?: string
}

export default function BlogCard({
  slug,
  title,
  date,
  description,
  className = "",
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className={`card ${className}`}>
        <div className="mb-2 flex flex-wrap gap-2">
            <span className="tag">{date}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-subtext">
          {description}
        </p>
      </div>
    </Link>
  )
}
