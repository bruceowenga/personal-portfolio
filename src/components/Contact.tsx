export default function Contact() {
  return (
    <section className="py-20 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Build Something</h2>
      <p className="text-secondary mb-8 max-w-xl">
        I'm always interested in discussing new projects, interesting ideas, and partnerships in the African tech ecosystem.
      </p>

      <a href="mailto:bruceowenga@gmail.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2 mb-8">
        ✉️ bruceowenga@gmail.com
      </a>

      <div className="flex items-center gap-2 text-secondary text-sm mb-12">
        <span>💬</span> I typically respond within 24 hours
      </div>

      <div className="mb-16">
        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">CONNECT</p>
        <div className="flex gap-4">
          {/* Social Icons Placeholders */}
          <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center text-secondary hover:text-white hover:bg-[#2a2a2a] transition border border-[#333]">
             GH
          </a>
          <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center text-secondary hover:text-white hover:bg-[#2a2a2a] transition border border-[#333]">
             LI
          </a>
          <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center text-secondary hover:text-white hover:bg-[#2a2a2a] transition border border-[#333]">
             TW
          </a>
        </div>
      </div>

      <div className="w-full max-w-3xl bg-[#111] border border-[#333] rounded-xl p-12 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
        <p className="text-secondary mb-8">Have a project in mind or want to discuss opportunities?</p>
        <a href="https://calendly.com/bruceowenga/30min" target="_blank" rel="noopener noreferrer" className="text-white font-bold flex items-center justify-center gap-2 hover:underline mx-auto">
          Schedule a call <span>→</span>
        </a>
      </div>
    </section>
  );
}
