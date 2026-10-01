import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToShow = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="relative min-h-full bg-[var(--background)]">
      <div className="fixed inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 690"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="5%" stopColor="#8ed1fc" />
              <stop offset="95%" stopColor="#5e60e6" />
            </linearGradient>
          </defs>

          <g className="wave-layer-1">
            <path
              d="M 0,700 L 0,131 C 103.25,99.55 206.50,68.10 269,87 C 331.49,105.89 353.24,175.12 435,168 C 516.75,160.87 658.53,77.39 758,74 C 857.46,70.60 914.62,147.27 988,166 C 1061.37,184.72 1150.96,145.49 1229,130 C 1307.03,114.50 1373.51,122.75 1440,131 L 1440,700 L 0,700 Z"
              fill="url(#gradient)"
              fillOpacity="0.4"
            />
          </g>

          <g className="wave-layer-2">
            <path
              d="M 0,700 L 0,306 C 86.82,324.61 173.65,343.22 244,339 C 314.34,334.77 368.22,307.71 446,317 C 523.77,326.28 625.46,371.93 724,358 C 822.53,344.06 917.91,270.55 990,259 C 1062.08,247.44 1110.88,297.84 1182,316 C 1253.11,334.15 1346.55,320.07 1440,306 L 1440,700 L 0,700 Z"
              fill="url(#gradient)"
              fillOpacity="0.53"
            />
          </g>

          <g className="wave-layer-3">
            <path
              d="M 0,700 L 0,481 C 64.03,473.41 128.06,465.83 206,462 C 283.93,458.16 375.76,458.09 467,477 C 558.23,495.90 648.86,533.8 721,546 C 793.13,558.2 846.76,544.70 932,516 C 1017.23,487.29 1134.06,443.36 1224,435 C 1313.93,426.63 1376.96,453.81 1440,481 L 1440,700 L 0,700 Z"
              fill="url(#gradient)"
              fillOpacity="1"
            />
          </g>
        </svg>
      </div>

      <section className="relative z-10 px-5 pt-28 pb-12 sm:px-8 sm:pb-8 max-w-3xl mx-auto">
        <h1 className="font-pixel text-3xl sm:text-4xl mb-8 text-white text-center">Blog</h1>

        <div className="flex flex-col gap-6">
          {postsToShow.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-5 rounded-2xl bg-slate-900/70 border border-white/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-sky-300/30 hover:bg-slate-900"
            >
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h2 className="font-pixel text-xl text-blue-300">{post.title}</h2>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{post.summary}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="text-2xl text-white hover:text-blue-400 transition-colors"
            >
              ←
            </Link>
          )}

          <span className="text-gray-300 text-sm">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="text-2xl text-white hover:text-blue-400 transition-colors"
            >
              →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}