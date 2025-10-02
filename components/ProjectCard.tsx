import Link from "next/link"
import type { Project } from "@/data/projects"

type Props = { project: Project }

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="card"
    >
      <div className="mb-2 flex flex-wrap gap-2">
        {project.tags?.slice(0, 3).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <div className="project-card-content">
      <h3 >{project.title}</h3>
      <p >
        {project.summary}
      </p>
      </div>
    </Link>
  )
}
