import { getPostBySlug, getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="bg-[var(--background)] min-h-full">
        <article className="px-5 pt-28 pb-12 sm:px-8 sm:pb-8 max-w-3xl mx-auto ">
            <h1 className="font-pixel text-3xl sm:text-5xl mb-2 text-sky-300">{post.title}</h1>
            <p className="text-neutral-400 mb-8 ml-5">{post.date}</p>
            
            <div className="prose prose-invert max-w-none ml-2">
                <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    </article>
</div>
  );
}