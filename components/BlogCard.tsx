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
        <div className="project-card-content">
          <h3>{title}</h3>
          <p className="tag inline-flex">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
