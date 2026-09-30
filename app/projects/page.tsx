import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-gray-800 pt-px">
      <div className="absolute inset-0 overflow-hidden">
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

      <section className="relative z-10 px-8 pb-12">
        <h2 className="font-pixel text-5xl mt-25 text-blue-300 mb-4 text-center">
          Current Project
        </h2>
        <div className="max-w-4xl mt-15 h-100 mx-auto bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">current-project.txt</span>
          </div>
          <div className="p-6 text-neutral-200">
            <h3 className="text-xl font-bold text-white mb-2">NAME HERE</h3>
            <p className="text-sm leading-relaxed">BLABLABLABLALBLBAL</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-8 pb-8 pt-24 text-center">
        <h1 className="font-pixel text-4xl text-white">My Projects</h1>
        <p className="mt-2 text-neutral-200">A collection of things I&apos;ve built.</p>
      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>

    </div>
  );
}