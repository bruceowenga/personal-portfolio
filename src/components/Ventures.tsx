const ventures = [
  {
    name: 'AgroPulse',
    tagline: 'AI + IoT for Agricultural Carbon Markets',
    description:
      'AgriTech platform bringing together AI, IoT sensors, and carbon intelligence to serve East African smallholder farmers and carbon market participants. Current focus: AI-native carbon MRV (Measurement, Reporting & Verification) that reduces uncertainty in a high-risk asset class, combining carbon estimation, project risk scoring, and AI document assistance.',
    status: 'Building',
    tags: ['Python', 'AI/ML', 'IoT', 'Carbon Markets', 'AgriTech'],
    icon: '🌱',
  },
  {
    name: 'BioSync',
    tagline: 'Biotech × Agriculture × SDG-Aligned AI',
    description:
      'Second AgriTech venture focused on the biotech and agriculture intersection with a strong SDG impact framework. Building a complementary platform to AgroPulse with a distinct market angle targeting impact investors alongside commercial operators.',
    status: 'Designing',
    tags: ['AI', 'Biotech', 'AgriTech', 'SDG', 'Impact Investing'],
    icon: '🔬',
  },
  {
    name: 'Linzi AI',
    tagline: 'Enterprise-Grade Observability for African SMBs',
    description:
      'Agentic SRE and cybersecurity AI platform targeting SMBs in Kenya and Africa. Built on a Grafana/Prometheus stack with PromQL/LogQL, leveraging local LLMs to autonomously detect anomalies, respond to incidents, and surface security threats, bringing enterprise-grade reliability engineering to resource-constrained teams.',
    status: 'In Development',
    tags: ['Grafana', 'Prometheus', 'LLMs', 'SRE', 'Cybersecurity'],
    icon: '🛡️',
  },
];

const statusColors: Record<string, string> = {
  Building: 'text-green-400 border-green-400/30 bg-green-400/10',
  Designing: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  'In Development': 'text-blue-400 border-blue-400/30 bg-blue-400/10',
};

export default function Ventures() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-4">Currently Building</h2>
      <p className="text-secondary mb-12 max-w-2xl">
        Ventures I'm building beyond client work to create lasting impact in African tech and agriculture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ventures.map((venture) => (
          <div
            key={venture.name}
            className="bg-[#111] border border-[#333] rounded-xl p-6 hover:border-white transition flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{venture.icon}</span>
              <span
                className={`text-xs font-bold px-2 py-1 rounded border ${statusColors[venture.status] ?? 'text-secondary border-[#333] bg-[#1a1a1a]'}`}
              >
                {venture.status}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-1">{venture.name}</h3>
            <p className="text-sm text-secondary font-medium mb-3">{venture.tagline}</p>
            <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{venture.description}</p>

            <div className="flex flex-wrap gap-2">
              {venture.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-[#1a1a1a] text-secondary px-2 py-1 rounded border border-[#333]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
