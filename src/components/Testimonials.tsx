const testimonials = [
  {
    quote:
      "Bruce brings a rare combination of deep infrastructure knowledge and practical AI implementation. His work building our observability stack and integrating multiple enterprise systems was exceptional. He thinks in systems, not just tickets.",
    name: 'Gamaliel Omany',
    title: 'Senior Software Engineer',
    company: 'TSAVO Real Estate',
    initials: 'GO',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-4">What People Say</h2>
      <p className="text-secondary mb-12 max-w-2xl">
        Perspectives from colleagues and leaders I've worked with closely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-[#111] border border-[#333] rounded-xl p-8 hover:border-white transition flex flex-col gap-6"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-[#333] flex-shrink-0"
            >
              <path
                d="M9.333 21.333C7.493 21.333 6 19.84 6 18V14.667C6 10.985 8.985 8 12.667 8H13.333V10.667H12.667C10.458 10.667 8.667 12.458 8.667 14.667V16H12C13.105 16 14 16.896 14 18V21.333C14 22.438 13.105 23.333 12 23.333H9.333ZM20 21.333C18.16 21.333 16.667 19.84 16.667 18V14.667C16.667 10.985 19.651 8 23.333 8H24V10.667H23.333C21.124 10.667 19.333 12.458 19.333 14.667V16H22.667C23.771 16 24.667 16.896 24.667 18V21.333C24.667 22.438 23.771 23.333 22.667 23.333H20Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-secondary leading-relaxed flex-1 italic">"{t.quote}"</p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-sm font-bold text-secondary flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-secondary text-xs">
                  {t.title} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
