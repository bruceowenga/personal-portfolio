import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-12">About Me</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 text-secondary leading-relaxed space-y-6">
          <p>
            I build software that bridges cutting-edge AI capabilities with practical business needs in African markets. My passion lies in the intersection of technology and entrepreneurship, particularly in creating solutions that scale across emerging economies.
          </p>
          <p>
            With experience spanning full-stack development, infrastructure management, and AI/ML integration, I approach problems holistically—from the database layer to intelligent user experiences. I'm deeply invested in the African tech ecosystem and believe in building tools that empower local businesses.
          </p>
          <p>
            When I'm not deploying Docker containers or fine-tuning AI models, you'll find me maintaining my homelab (named after Norse gods—because why not?), discovering new music, or documenting my technical journey on my blog.
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
              {/* Placeholder for the image from the screenshot */}
              <div className="absolute inset-0 bg-[#111] flex items-center justify-center text-secondary">
                 <span className="text-lg">Profile Image Placeholder</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
