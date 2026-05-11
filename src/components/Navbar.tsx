'use client';

import Link from "next/link";
import { useState } from "react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="container flex items-center justify-between" style={{ height: '80px' }}>
        <Link href="/" className="logo font-bold text-xl shrink-0">
          &lt;Bruce/&gt;
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm text-secondary">
          <Link href="#work" className="hover:text-white transition">Work</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#blog" className="hover:text-white transition">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/bruceowenga" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/brucembudi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-white transition">
            <LinkedinIcon />
          </a>
          <a href="/resume.pdf" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-secondary hover:text-white transition p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
          <div className="container py-6 flex flex-col gap-1">
            {(['Work', 'Experience', 'About', 'Blog'] as const).map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-secondary hover:text-white transition py-3 border-b border-[#111] text-sm"
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/bruceowenga" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/brucembudi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-white transition">
                <LinkedinIcon />
              </a>
              <a href="/resume.pdf" className="ml-auto bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
