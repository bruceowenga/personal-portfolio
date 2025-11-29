export default function Hero() {
  return (
    <section className="hero flex flex-col items-center justify-center text-center" style={{ minHeight: '80vh' }}>
      <div className="location-badge bg-[#1a1a1a] px-4 py-1 rounded-full text-xs text-secondary mb-8 flex items-center gap-2">
        <span style={{ color: 'red' }}>📍</span> Nairobi, Kenya
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Building AI-Powered<br />
        <span className="text-secondary">Solutions</span> for African<br />
        Markets
      </h1>
      
      <p className="text-secondary text-lg mb-8 max-w-2xl">
        Full-Stack Engineer at TSAVO | Infrastructure Enthusiast | Technical Writer
      </p>
      
      <div className="flex gap-4 mb-12">
        <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2">
          View My Work <span>→</span>
        </a>
        <a href="https://blog.brucembudi.dev" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2a2a2a] transition border border-[#333]">
          Read My Blog
        </a>
      </div>
      
      <div className="tech-stack flex flex-wrap justify-center gap-3">
        {['Next.js', 'Python', 'Docker', 'AI/ML', 'Web3', 'Node.js'].map((tech) => (
          <span key={tech} className="bg-[#1a1a1a] text-secondary px-4 py-2 rounded-full text-sm border border-[#333]">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-16 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
}
