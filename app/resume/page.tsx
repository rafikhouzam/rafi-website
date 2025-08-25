import resume from '@/data/resume'


export default function ResumePage() {
return (
<div className="space-y-10">
<header className="prose">
<h1>Resume</h1>
<p className="text-slate-600 dark:text-slate-400">Interactive overview. PDF export can be added later.</p>
</header>


<section>
<h2 className="text-xl font-semibold mb-4">Experience</h2>
<div className="space-y-4">
{resume.experience.map((e) => (
<div className="card p-4" key={e.company + e.role}>
<div className="flex items-baseline justify-between gap-4">
<h3 className="font-semibold">{e.role} — {e.company}</h3>
<span className="text-sm text-slate-500">{e.dates}</span>
</div>
<ul className="list-disc pl-5 mt-2 space-y-1">
{e.points.map((p, i) => <li key={i}>{p}</li>)}
</ul>
</div>
))}
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Skills</h2>
<div className="flex flex-wrap gap-2">
{resume.skills.map(s => <span key={s} className="tag">{s}</span>)}
</div>
</section>


<section>
<h2 className="text-xl font-semibold mb-4">Education</h2>
<div className="card p-4">
<div className="font-medium">{resume.education.school}</div>
<div className="text-sm text-slate-500">{resume.education.degree} — {resume.education.when}</div>
</div>
</section>
</div>
)
}