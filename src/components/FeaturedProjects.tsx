import Link from "next/link";
import { getFeaturedProjects } from "@/actions/projects";

const statusLabels: Record<string, string> = {
  'in-development': 'In Development',
  'active': 'Active',
  'production': 'Production',
  'completed': 'Completed',
};

const projectVisuals: Record<string, { gradient: string; icon: string }> = {
  'homelab-observability-stack': {
    gradient: 'linear-gradient(135deg, #0f2027 0%, #1a3a2a 50%, #0d1f1a 100%)',
    icon: '📊',
  },
  'farm-manager': {
    gradient: 'linear-gradient(135deg, #0f2010 0%, #1a4020 50%, #0d200f 100%)',
    icon: '🌾',
  },
  'api-graveyard': {
    gradient: 'linear-gradient(135deg, #1a1010 0%, #3a1a1a 50%, #200f0f 100%)',
    icon: '💀',
  },
  'linzi-ai': {
    gradient: 'linear-gradient(135deg, #1a1000 0%, #3a2800 50%, #1f1500 100%)',
    icon: '🛡️',
  },
  'firefly-mcp-server': {
    gradient: 'linear-gradient(135deg, #001a10 0%, #003020 50%, #001510 100%)',
    icon: '⚡',
  },
  'excel-toolkit': {
    gradient: 'linear-gradient(135deg, #001a0f 0%, #00391f 50%, #001509 100%)',
    icon: '📋',
  },
  'wbts': {
    gradient: 'linear-gradient(135deg, #100808 0%, #2a0e0e 50%, #120808 100%)',
    icon: '🔥',
  },
};

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="work" className="py-20">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      <p className="text-secondary mb-12 max-w-2xl">
        Real-world solutions that bridge cutting-edge technology with practical business impact
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: any) => {
          const imageUrl = typeof project.image === 'object' && project.image?.url
            ? project.image.url
            : null;

          return (
            <div key={project.id} className="project-card bg-[#111] border border-[#333] rounded-xl overflow-hidden hover:border-white transition group">
              <div className="h-64 w-full relative overflow-hidden" style={{
                background: imageUrl
                  ? `url(${imageUrl})`
                  : (projectVisuals[project.slug]?.gradient ?? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'),
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {!imageUrl && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="text-5xl">{projectVisuals[project.slug]?.icon ?? '💻'}</span>
                    <span className="text-xs text-secondary/50 uppercase tracking-widest font-mono">
                      {project.slug}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-8">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold min-w-0">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#222] text-secondary border border-[#333] shrink-0">
                      {statusLabels[project.status] || project.status}
                    </span>
                  )}
                </div>

                <p className="text-secondary mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((item: any, idx: number) => (
                      <span key={idx} className="text-xs bg-[#1a1a1a] text-secondary px-3 py-1 rounded border border-[#333]">
                        {item.tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.slug && (
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold hover:underline">
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
          View All Projects
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
}
