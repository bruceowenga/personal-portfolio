import { getProjectBySlug } from "@/actions/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

const statusLabels: Record<string, string> = {
  'in-development': 'In Development',
  'active': 'Active',
  'production': 'Production',
  'completed': 'Completed',
};

const statusColors: Record<string, string> = {
  'production': 'text-green-400 border-green-400/30 bg-green-400/10',
  'active': 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  'in-development': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  'completed': 'text-secondary border-[#333] bg-[#1a1a1a]',
};

export const dynamic = 'force-dynamic';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const imageUrl = typeof project.image === 'object' && project.image?.url
    ? project.image.url
    : null;

  const paragraphs = (project as any).caseStudy
    ? (project as any).caseStudy.split(/\n\n+/).filter(Boolean)
    : [];

  const highlights = (project as any).highlights ?? [];

  return (
    <div className="container py-20">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-secondary mb-12 hover:text-white transition">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Projects
      </Link>

      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.status && (
              <span className={`text-xs font-bold px-3 py-1 rounded border ${statusColors[project.status] ?? 'text-secondary border-[#333] bg-[#1a1a1a]'}`}>
                {statusLabels[project.status] || project.status}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{project.title}</h1>
          <p className="text-xl text-secondary leading-relaxed">{project.description}</p>
        </div>

        {/* Tech stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((item: any, idx: number) => (
              <span key={idx} className="text-sm bg-[#1a1a1a] text-secondary px-4 py-2 rounded border border-[#333]">
                {item.tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
              View Live
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] font-bold rounded-full hover:border-white transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
        </div>

        {/* Project image */}
        {imageUrl && (
          <div className="mb-12 rounded-xl overflow-hidden border border-[#333]">
            <img src={imageUrl} alt={project.title} className="w-full h-auto" />
          </div>
        )}

        {/* Key metrics */}
        {highlights.length > 0 && (
          <div className="bg-[#111] border border-[#333] rounded-xl p-8 mb-12">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">Key Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((h: any, idx: number) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">{h.value}</p>
                  <p className="text-xs text-secondary uppercase tracking-wide">{h.metric}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case study body */}
        {paragraphs.length > 0 && (
          <div className="space-y-6 text-secondary leading-relaxed">
            {paragraphs.map((para: string, idx: number) => {
              // Lines starting with "## " are section headings
              if (para.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white pt-6 first:pt-0">
                    {para.replace(/^## /, '')}
                  </h2>
                );
              }
              // Lines starting with "- " are bullet lists
              if (para.includes('\n- ') || para.startsWith('- ')) {
                const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.replace(/^- /, ''));
                return (
                  <ul key={idx} className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#555] mt-1.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{para}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
