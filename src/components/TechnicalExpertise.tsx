import { getAllSkills } from "@/actions/skills";

export default async function TechnicalExpertise() {
  const skills = await getAllSkills();

  return (
    <section className="pb-20">
      <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup: any) => (
          <div key={skillGroup.id} className="bg-[#111] border border-[#333] rounded-xl p-6 hover:border-white transition">
            <h4 className="font-bold mb-4">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items && skillGroup.items.map((item: any, idx: number) => (
                <span key={idx} className="bg-[#1a1a1a] text-secondary text-sm px-3 py-1 rounded-full border border-[#333]">
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
