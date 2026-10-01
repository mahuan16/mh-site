import Image from "next/image";

type ProjectCardProps = {
  title: string;
  summary: string;
  image: string;
  repoUrl: string;
};

export default function ProjectCard({ title, summary, image, repoUrl }: ProjectCardProps) {
  return (
    <article className="bg-slate-900/90 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-sky-300/40">
      <div className="relative w-full aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-300 mt-2 text-sm leading-relaxed">{summary}</p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sky-300 hover:text-white transition-colors">
          View Repo →
        </a>
      </div>
    </article>
  );
}