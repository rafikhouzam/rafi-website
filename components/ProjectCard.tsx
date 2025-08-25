// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow transition
                 hover:-translate-y-0.5 hover:shadow-md"
    >
      

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags?.slice(0,3).map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 className="font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
