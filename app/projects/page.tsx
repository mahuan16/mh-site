import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Coalesce from "@/components/coalesce"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-full bg-[var(--background)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Coalesce />
      </div>

      <section className="relative z-10 px-5 sm:px-8 pt-28 pb-12">
        <h2 className="font-pixel text-3xl sm:text-5xl text-sky-300 mb-4 text-center">
          Current Project
        </h2>
        <div className="max-w-4xl mt-8 sm:mt-12 mx-auto bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">current-project.txt</span>
          </div>
          <div className="p-6 text-neutral-200">
            <h3 className="text-xl font-bold text-white mb-2">Intern Bot</h3>
            <p className="text-sm leading-relaxed">InternBot is a Discord bot that scrapes internship-posting sources (like GitHub's crowdsourced internship lists) for new listings, then posts them to a Discord channel as formatted embeds with interactive buttons and a dropdown. Users can mark postings as "Interested" or "Not Interested," and track their application progress (Not Started / In Progress / Waiting on Result) directly from the message. The bot stores everything in a SQLite database, avoids re-posting duplicates, and will send reminders to users who still have applications in progress.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 sm:px-8 pb-8 pt-10 text-center">
        <h1 className="font-pixel text-3xl sm:text-4xl text-white">My Projects</h1>
        <p className="mt-2 text-neutral-200">A collection of things I&apos;ve built.</p>
      </section>

      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-5 sm:p-8 pb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>

    </div>
  );
}