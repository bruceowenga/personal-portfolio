'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Spotlight effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent)`,
          willChange: 'background',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="location-badge bg-[#1a1a1a] px-4 py-1 rounded-full text-xs text-secondary mb-8 flex items-center gap-2 mx-auto w-fit">
          <span style={{ color: 'red' }}>📍</span> Nairobi, Kenya
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AI/ML Engineer
          <br />
          <span className="text-secondary"> &</span> MLOps Specialist
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            Open to Opportunities
          </span>
        </div>

        <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Building intelligent systems that work in production — agentic workflows, LLM infrastructure, and SRE-grade reliability.
        </p>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2">
            View My Work <span>→</span>
          </a>
          <a href="https://blog.brucembudi.dev" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2a2a2a] transition border border-[#333]">
            Read My Blog
          </a>
        </div>

        <div className="tech-stack flex flex-wrap justify-center gap-3">
          {['LangGraph', 'Python', 'LLMs', 'Prometheus', 'FastAPI', 'Docker'].map((tech) => (
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
      </div>
    </section>
  );
}