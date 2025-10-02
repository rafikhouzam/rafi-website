import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from "@/components/BlogCard"
import projects from '@/data/projects'
import { getLatestPost } from "../lib/posts"


export default function HomePage() {
const latest = getLatestPost()
const highlights = projects.slice(0, 3)
return (
<div className="landing">
<section className="landing-hero">
  <h1>
    Data Engineer & Builder
  </h1>
  <div className="gradient-bar"></div>

  <div className='text-center py-5'>
    <a>
    I build fast, efficient data tools, embeddings-powered search, and analytics that make a real difference (I hope). I go outside whenever I can. Sometimes I write. Sometimes I read. Sometimes I do absolutely nothing.
    </a>
  </div>
  <div className="mt-6 flex gap-3 justify-center">
    <Link href="/experience" className="btn">View My Experience</Link>
    <Link href="/portfolio" className="btn">See My Projects</Link>
  </div>
</section>

<section className="landing-blog inline-block">
      <h2 className="text-xl font-semibold mb-4">Recent Thoughts</h2>
      {latest ? (
        <BlogCard
          slug={latest.slug}
          title={latest.title}
          date={latest.date}
          description={latest.description}
        />
      ) : (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Blog coming soon.
        </p>
      )}
</section>

<section className="landing-projects">
  <h2>Highlighted Projects</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {highlights.map(p => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
</section>

</div>
)
}