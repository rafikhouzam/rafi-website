import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";

type Params = { slug: string };

export default async function ProjectDetail({
  params,
}: {
  params: Promise<Params>; // 👈 params is async in Next 15
}) {
  const { slug } = await params;         // 👈 await it
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="landing grid gap-8 md:grid-cols-[1fr_320px]">
      <article className="space-y-8">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <Link href="/portfolio" className="hover:underline">
            ← Back to Portfolio
          </Link>
        </div>

        <header className="space-y-3">
          <h1 className="">
            {project.title}
          </h1>
          <a className="text-slate-600 dark:text-slate-400">{project.summary}</a>
          {project.tags?.length ? (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          ) : null}
        </header>
        <Section title="Problem"><p>{project.problem}</p></Section>
        <Section title="Solution"><p>{project.solution}</p></Section>
        <Section title="Impact">
          <ul className="check-bullets space-y-1">
            {project.impact.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </Section>
      </article>

      <aside className="space-y-4 md:sticky md:top-6 h-max">
        <div className="card p-4">
          <h2 className="font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>

        {project.links?.github && (
            <a
              className="btn w-full justify-center"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
        )}
      </aside>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card p-5">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  );
}

// Optional but nice: prebuild paths
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
// export const dynamicParams = false; // if you won't add new slugs at runtime
