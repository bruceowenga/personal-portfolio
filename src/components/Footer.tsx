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
              <li><Link href="#blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Personal Site</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li><Link href="#" className="hover:text-white transition">GitHub</Link></li>
              <li><Link href="#" className="hover:text-white transition">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white transition">Twitter</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-secondary pt-8 border-t border-[#333]">
          <p>© 2025 Bruce Mbudi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <span className="hover:text-white transition">Built with Next.js</span>
            <span className="flex items-center gap-1 text-yellow-500">
              🏆 Servers named after Norse gods
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
