import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'


export default function PortfolioPage() {
return (
<div>
<h1 className="text-2xl font-semibold mb-6">Portfolio</h1>
<div className="grid md:grid-cols-2 gap-4">
{projects.map(p => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</div>
)
}