import { getAllExperience } from "@/actions/experience";

export default async function Experience() {
  const experiences = await getAllExperience();

  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp: any) => {
          const startDate = new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          const endDate = exp.current ? 'Present' : exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';

          return (
            <div key={exp.id} className="bg-[#111] border border-[#333] rounded-xl p-8 relative overflow-hidden hover:border-white transition">
              <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                  <p className="text-xl text-white mb-2">{exp.company}</p>
                  <p className="text-sm text-secondary">
                    {startDate} - {endDate}
                  </p>
                </div>
                {exp.current && (
                  <span className="bg-[#222] text-secondary px-3 py-1 rounded-full text-sm border border-[#333]">
                    Current
                  </span>
                )}
              </div>

              <p className="text-secondary mb-6">
                {exp.description}
              </p>

              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-4 text-secondary">
                  {exp.achievements.map((item: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#333] mt-1">→</span>
                      {item.achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
