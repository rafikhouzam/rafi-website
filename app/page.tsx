import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'


export default function HomePage() {
const highlights = projects.slice(0, 3)
return (
<div className="space-y-12">
<section className="prose">
<h1>Rafi Khouzam</h1>
<p className="text-lg">Data Engineer & Builder. I design reliable data flows and ship internal tools that save time and uncover signal.</p>
<div className="flex gap-3">
<Link href="/portfolio" className="btn btn-primary">View Portfolio</Link>
<Link href="/resume" className="btn btn-ghost">View Resume</Link>
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Highlighted Projects</h2>
<div className="grid md:grid-cols-2 gap-4">
{highlights.map(p => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Recent Writing</h2>
<p className="text-sm text-slate-600 dark:text-slate-400">Blog coming soon.</p>
</section>
</div>
)
}