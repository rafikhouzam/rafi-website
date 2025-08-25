import Link from 'next/link'


export default function ProjectCard({ project }: { project: any }) {
return (
<Link href={`/portfolio/${project.slug}`} className="card p-4 block hover:-translate-y-0.5 transition">
<div className="text-sm mb-2 flex flex-wrap gap-2">
{project.tags?.map((t: string) => <span key={t} className="tag">{t}</span>)}
</div>
<h3 className="font-semibold mb-1">{project.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-400">{project.summary}</p>
</Link>
)
}