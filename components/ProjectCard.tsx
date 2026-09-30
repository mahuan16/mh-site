import Image from "next/image";

type ProjectCardProps = {
  title: string;
  summary: string;
  image: string;
  repoUrl: string;
};

export default function ProjectCard({ title, summary, image, repoUrl }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-neutral-400 mt-2 text-sm">{summary}</p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors">
          View Repo →
        </a>
      </div>
    </div>
  );
}