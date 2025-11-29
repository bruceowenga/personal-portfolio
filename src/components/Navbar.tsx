import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between" style={{ height: '80px' }}>
        <Link href="/" className="logo font-bold text-xl">
          &lt;Bruce/&gt;
        </Link>
        
        <div className="nav-links flex gap-8 text-sm text-secondary">
          <Link href="#work" className="hover:text-white transition">Work</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#blog" className="hover:text-white transition">Blog</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="theme-toggle text-secondary hover:text-white">
            {/* Sun icon placeholder */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <a href="/resume.pdf" className="resume-btn bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
