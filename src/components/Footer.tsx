import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#333] py-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-xl block mb-4">
              &lt;Bruce/&gt;
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              Building solutions for African tech markets
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li><Link href="#work" className="hover:text-white transition">Work</Link></li>
              <li><Link href="#experience" className="hover:text-white transition">Experience</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Writing</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li>
                <a href="https://blog.brucembudi.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://github.com/bruceowenga/homelab-public" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Homelab (Public)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li>
                <a href="https://github.com/bruceowenga" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brucembudi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://blog.brucembudi.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-secondary pt-8 border-t border-[#333]">
          <p>© 2026 Bruce Mbudi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition">Built with Next.js + PayloadCMS</span>
            <span className="flex items-center gap-1 text-yellow-500">
              ⚡ Servers named after Norse gods
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
