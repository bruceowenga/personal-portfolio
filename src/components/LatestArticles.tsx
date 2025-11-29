import Link from "next/link";
import { getLatestPosts } from "@/actions/ghost";

export default async function LatestArticles() {
  const articles = await getLatestPosts(3);

  return (
    <section id="blog" className="py-20">
      <h2 className="text-4xl font-bold mb-2">Latest Articles</h2>
      <p className="text-secondary mb-12">
        Sharing insights about full-stack development, infrastructure, and AI/ML
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => {
          const publishedDate = new Date(article.published_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });

          return (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] border border-[#333] rounded-xl overflow-hidden hover:border-white transition group cursor-pointer"
            >
              <div
                className="h-48 w-full relative bg-cover bg-center"
                style={{
                  backgroundImage: article.feature_image
                    ? `url(${article.feature_image})`
                    : 'linear-gradient(to bottom right, #2a2a2a, #1a1a1a)',
                }}
              >
                {!article.feature_image && (
                  <div className="absolute inset-0 flex items-center justify-center text-secondary opacity-20">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-white transition">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    📅 {publishedDate}
                  </span>
                  {article.reading_time && article.reading_time > 0 && (
                    <span className="flex items-center gap-1">
                      ⏱️ {article.reading_time}m read
                    </span>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://blog.brucembudi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2a2a2a] transition border border-[#333] flex items-center gap-2"
        >
          View All Articles <span>→</span>
        </a>
      </div>
    </section>
  );
}
