import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'


export default function HomePage() {
const highlights = projects.slice(0, 3)
return (
<div className="space-y-12">
<section className="section">
  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
    Data Engineer & Builder
  </h1>
  <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-prose">
    I build fast, traceable data tools, embeddings-powered search, and analytics that ship.
  </p>
  <div className="mt-6 flex gap-3">
    <Link href="/resume" className="btn btn-primary">View Resume</Link>
    <Link href="/portfolio" className="btn">See Projects</Link>
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
<h2 className="text-xl font-semibold mb-4">Recent Thoughts</h2>
<p className="text-sm text-slate-600 dark:text-slate-400">Blog coming soon.</p>
</section>
</div>
)
}