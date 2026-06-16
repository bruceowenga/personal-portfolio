import Image from "next/image";

import { getSiteSettings } from "@/actions/globals";

export default async function About() {
  const siteSettings = await getSiteSettings();
  const profileImage = siteSettings?.profileImage && typeof siteSettings.profileImage === 'object' && 'url' in siteSettings.profileImage
    ? siteSettings.profileImage.url
    : null;

  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 text-secondary leading-relaxed space-y-6">
          <p>
            I'm an AI/ML Engineer and MLOps Specialist with 7+ years building production-grade systems. Most recently at TSAVO Real Estate in Nairobi, where I owned the full observability stack (Prometheus, Grafana, Loki, Alertmanager) monitoring 12+ production services, architected enterprise integrations between Dynamics 365 F&O, Zoho CRM, and 3CX telephony, and led AI adoption — deploying local LLM infrastructure, building RAG pipelines, and developing Linzi AI, an agentic SRE platform built on LangGraph and local LLMs.
          </p>
          <p>
            I specialize in the intersection of AI/ML and infrastructure, building custom Prometheus exporters for LLM inference metrics, deploying local LLMs for document processing, and designing RAG pipelines that solve real business problems. I believe in bringing enterprise-grade engineering practices (SLOs, structured logging, zero-downtime deployments) to every layer of the stack.
          </p>
          <p>
            Outside of client work, I'm building <strong className="text-white">AgroPulse</strong> (AI + IoT for agricultural carbon markets) and <strong className="text-white">Linzi AI</strong> (agentic SRE for African SMBs). My homelab (a self-hosted infrastructure cluster named after Norse gods) is my proving ground for everything from Kubernetes experiments to custom alerting pipelines. I document it all on my blog.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-[#1a1a1a] text-secondary px-4 py-2 rounded-full border border-[#333] text-sm">
                <span>🏊‍♂️</span> Swimming
              </span>
              <span className="flex items-center gap-2 bg-[#1a1a1a] text-secondary px-4 py-2 rounded-full border border-[#333] text-sm">
                <span>🎵</span> Music Production
              </span>
              <span className="flex items-center gap-2 bg-[#1a1a1a] text-secondary px-4 py-2 rounded-full border border-[#333] text-sm">
                <span>🥾</span> Hiking
              </span>
              <span className="flex items-center gap-2 bg-[#1a1a1a] text-secondary px-4 py-2 rounded-full border border-[#333] text-sm">
                <span>📝</span> Technical Writing
              </span>
            </div>
          </div>
          
          <div className="pt-4">
             <a href="https://blog.brucembudi.dev" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition inline-block">
                Read My Blog
             </a>
          </div>
        </div>

        <div className="flex-1 w-full">
           <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[#333]">
              {profileImage ? (
                <Image 
                  src={profileImage} 
                  alt="Profile Image" 
                  fill 
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[#111] flex items-center justify-center text-secondary">
                   <span className="text-lg">Profile Image Placeholder</span>
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
}
