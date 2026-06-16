const contributions = [
  {
    repo: 'expo/expo',
    project: 'Expo Go',
    description: 'Improved documentation clarity for key contextual feature usage, reducing developer confusion around context-dependent APIs.',
    url: 'https://github.com/expo/expo',
    type: 'Documentation',
  },
  {
    repo: 'alexa/ask-cli',
    project: 'Amazon Alexa Skills CLI',
    description: 'Fixed grammatical error in the Python SDK error message, improving developer UX and error message clarity.',
    url: 'https://github.com/alexa/ask-cli',
    type: 'Bug Fix',
  },
];

export default function OpenSourceContributions() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-4">Open Source</h2>
      <p className="text-secondary mb-12 max-w-2xl">
        Contributing back to the tools and communities that make great software possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributions.map((contrib) => (
          <a
            key={contrib.repo}
            href={contrib.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] border border-[#333] rounded-xl p-6 hover:border-white transition group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-secondary"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-mono text-secondary">{contrib.repo}</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-white transition">{contrib.project}</h3>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-[#1a1a1a] border border-[#333] text-secondary whitespace-nowrap">
                {contrib.type}
              </span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">{contrib.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
