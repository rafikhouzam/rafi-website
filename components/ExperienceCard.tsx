type ExperienceCardProps = {
  role: string
  company: string
  dates: string
  points: string[]
}

export default function ExperienceCard({ role, company, dates, points }: ExperienceCardProps) {
  return (
    <div className="card p-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold">
          {role} — {company}
        </h3>
        <span className="tag">{dates}</span>
      </div>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}
