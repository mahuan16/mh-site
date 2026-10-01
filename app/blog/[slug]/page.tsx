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
    <div className="bg-[#12152c] min-h-full">
        <article className="p-8 pt-24 max-w-3xl mx-auto ">
            <h1 className="font-pixel text-5xl mb-2 text-blue-300">{post.title}</h1>
            <p className="text-neutral-400 mb-8 ml-5">{post.date}</p>
            
            <div className="prose prose-invert max-w-none ml-2">
                <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    </article>
</div>
  );
}