import experience from "@/data/experience"
import ExperienceCard from "@/components/ExperienceCard"

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
          <div className="gradient-bar my-10"></div>
        <div className="space-y-4">
          {experience.experience.map((e) => (
            <ExperienceCard
              key={e.company + e.role}
              role={e.role}
              company={e.company}
              dates={e.dates}
              points={e.points}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="gradient-bar my-10"></div>
        <div className="flex flex-wrap gap-2 justify-center">
          {experience.skills.map((s) => (
            <span key={s} className="skill">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
        <div className="gradient-bar my-10"></div>
        <div className="flex justify-center">
        <div className="card p-4 inline-block">
          <div className="font-medium">{experience.education.school}</div>
          <div className="text-sm italic">
            {experience.education.degree} &#183; {experience.education.when}
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
