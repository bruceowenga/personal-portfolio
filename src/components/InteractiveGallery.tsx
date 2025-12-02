'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Project = {
  id: string;
  type: 'project';
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  status: string;
  image?: string;
  slug?: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
};

type Experience = {
  id: string;
  type: 'experience';
  title: string;
  company: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
};

type CardItem = Project | Experience;

const statusLabels: Record<string, string> = {
  'in-development': 'In Development',
  'active': 'Active',
  'production': 'Production',
  'completed': 'Completed',
};

export default function InteractiveGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedId(null);
      }
    }
    if (selectedId) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedId]);

  // Sample Data
  const items: CardItem[] = [
    {
      id: 'car-tracker',
      type: 'project',
      title: 'Car Pricing Tracker',
      description: 'A comprehensive tool for tracking and analyzing car prices across multiple marketplaces.',
      fullDescription: 'The Car Pricing Tracker is a sophisticated data aggregation platform that monitors vehicle pricing trends in real-time. It scrapes data from major automotive marketplaces, normalizes the data, and provides actionable insights for buyers and sellers.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      status: 'production',
      slug: 'car-pricing-tracker',
      features: [
        'Real-time price monitoring',
        'Historical price trends',
        'Market analysis dashboard',
        'Automated alerts',
      ]
    },
    {
      id: 'tsavo-eng',
      type: 'experience',
      title: 'Software Engineer',
      company: 'TSAVO Real Estate',
      period: '2023 - Present',
      current: true,
      description: [
        'Architected and deployed a microservices-based property management system serving 500+ units.',
        'Reduced deployment time by 60% through CI/CD pipeline optimization using GitHub Actions.',
        'Implemented a real-time notification system for maintenance requests using WebSockets.',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      id: 'dtechtive-eng',
      type: 'experience',
      title: 'Data Acquisition Engineer',
      company: 'Dtechtive',
      period: '2022 - 2023',
      current: false,
      description: [
        'Developed high-performance web scrapers processing 1M+ data points daily.',
        'Designed a scalable data pipeline using Apache Kafka and Spark.',
        'Optimized database queries reducing reporting latency by 40%.',
      ],
      technologies: ['Python', 'Scrapy', 'Kafka', 'PostgreSQL']
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            layoutId={item.id}
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer bg-[#111] border border-[#333] rounded-xl overflow-hidden hover:border-white transition-colors group relative"
            whileHover={{ y: -5 }}
          >
            <div className="p-6 h-full flex flex-col">
              {item.type === 'project' ? (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded border ${
                      item.status === 'production' ? 'bg-green-900/30 text-green-400 border-green-900' : 'bg-[#222] text-secondary border-[#333]'
                    }`}>
                      {statusLabels[item.status] || item.status}
                    </span>
                  </div>
                  <p className="text-secondary text-sm mb-4 flex-grow">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] bg-[#1a1a1a] text-secondary px-2 py-1 rounded border border-[#333]">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="text-[10px] bg-[#1a1a1a] text-secondary px-2 py-1 rounded border border-[#333]">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    {item.current && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-900/30 text-blue-400 border border-blue-900">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-secondary mb-4 font-mono">{item.company} • {item.period}</div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] bg-[#1a1a1a] text-secondary px-2 py-1 rounded border border-[#333]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              layoutId={selectedId}
              ref={containerRef}
              className="w-full max-w-2xl bg-[#111] border border-[#333] rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#222] text-white hover:bg-[#333] transition"
              >
                ✕
              </button>

              {(() => {
                const item = items.find((i) => i.id === selectedId);
                if (!item) return null;

                return (
                  <div className="p-8">
                    {item.type === 'project' ? (
                      <>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                            <div className="flex gap-2">
                              <span className={`text-xs font-bold px-2 py-1 rounded border ${
                                item.status === 'production' ? 'bg-green-900/30 text-green-400 border-green-900' : 'bg-[#222] text-secondary border-[#333]'
                              }`}>
                                {statusLabels[item.status] || item.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="prose prose-invert max-w-none mb-8">
                          <p className="text-lg text-secondary leading-relaxed mb-6">
                            {item.fullDescription}
                          </p>
                          
                          {item.features && (
                            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] mb-6">
                              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Features</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {item.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-secondary text-sm">
                                    <span className="text-blue-400">✓</span> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="text-xs bg-[#1a1a1a] text-secondary px-3 py-1 rounded border border-[#333]">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          {item.slug && (
                            <Link href={`/projects/${item.slug}`} className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2">
                              View Case Study <span>→</span>
                            </Link>
                          )}
                          {item.demoUrl && (
                            <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-[#222] text-white px-6 py-3 rounded-full font-bold hover:bg-[#333] transition border border-[#333]">
                              Live Demo
                            </a>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                            <div className="text-xl text-blue-400 font-mono mb-2">{item.company}</div>
                            <div className="text-sm text-secondary">{item.period}</div>
                          </div>
                          {item.current && (
                            <span className="text-xs font-bold px-3 py-1 rounded bg-blue-900/30 text-blue-400 border border-blue-900">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="space-y-4 mb-8">
                          {item.description.map((point, idx) => (
                            <div key={idx} className="flex gap-3 text-secondary">
                              <span className="text-blue-500 mt-1.5 text-xs">●</span>
                              <p className="leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-[#333] pt-6">
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span key={tech} className="text-xs bg-[#1a1a1a] text-secondary px-3 py-1 rounded border border-[#333]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
