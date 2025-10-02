import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'


export default function PortfolioPage() {
return (
<div className="landing max-w-5xl mx-auto px-4 py-8">
<h1 className="text-2xl font-semibold mb-6">Portfolio</h1>
<div className='gradient-bar my-10'></div>
<div className="grid md:grid-cols-2 gap-4">
{projects.map(p => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</div>
)
}