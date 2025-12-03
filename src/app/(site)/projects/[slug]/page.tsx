import { getProjectBySlug } from "@/actions/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

const statusLabels: Record<string, string> = {
  'in-development': 'In Development',
  'active': 'Active',
  'production': 'Production',
  'completed': 'Completed',
};

// Force dynamic rendering since we need database access
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

  return (
    <div className="container py-20">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm mb-8 hover:underline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Projects
      </Link>

      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          {project.status && (
            <span className="text-xs font-bold px-3 py-1 rounded bg-[#222] text-secondary border border-[#333]">
              {statusLabels[project.status] || project.status}
            </span>
          )}
        </div>

        <p className="text-xl text-secondary mb-8">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((item: any, idx: number) => (
              <span key={idx} className="text-sm bg-[#1a1a1a] text-secondary px-4 py-2 rounded border border-[#333]">
                {item.tech}
              </span>
            ))}
          </div>
        )}

        {imageUrl && (
          <div className="mb-12 rounded-xl overflow-hidden border border-[#333]">
            <img
              src={imageUrl}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="flex gap-4 mb-12">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
            >
              View Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] font-bold rounded hover:border-white transition"
            >
              View on GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
