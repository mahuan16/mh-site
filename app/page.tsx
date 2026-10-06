import Image from "next/image";
import Link from "next/link";
import IntroWindow, { InterestWindow, SpotifyWindow } from "@/components/MiniWindow";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="bg-[linear-gradient(145deg,#0b1024_0%,#172653_38%,#101735_68%,#080b18_100%)]">
      <section className="min-h-[48rem] sm:min-h-screen w-full relative overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-10">
          <IntroWindow />
          <InterestWindow />
          <SpotifyWindow />
        </div>

        <div className="absolute inset-0 z-0">
          <Image src="/header.jpg" alt="A photo of me" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply" />
        </div>
      </section>

      <section className="relative z-10 mt-8 w-[calc(100%-2rem)] max-w-6xl mx-auto bg-slate-900/75 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 py-10 sm:px-10 lg:px-14 gap-10 lg:gap-16 text-white shadow-2xl">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl mb-4 font-pixel">About Me</h2>
          <p className="text-lg leading-relaxed font-sans">
            Hi, I&apos;m Maria Huan, a Computer Science undergraduate at UC Berkeley passionate about
            SWE, ML, and Robotics. I love building tools that directly interact with and benefit its users, and I&apos;m currently
            focused on developing tools (web apps, discord bots, etc.) to make life more convenient. When I&apos;m not coding, you&apos;ll
            find me drawing on Procreate, reading a comic, or hanging out with friends!
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-sm aspect-square">
          <Image
            src="/about-me.jpg"
            alt="A photo of me"
            fill
            className="object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Current Project highlight */}
      <section className="relative z-10 w-full px-5 pt-16 pb-10 sm:px-8 sm:pt-20">
          <h2 className="font-pixel text-3xl text-blue-300 mb-6 text-center">Current Project</h2>

          <div className="max-w-4xl mx-auto bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">current-project.txt</span>
          </div>
          <div className="p-6 sm:p-8 text-slate-200">
            <h3 className="text-xl font-bold text-white mb-2">Intern Bot</h3>
            <p className="text-sm leading-relaxed">
              InternBot is a Discord bot that scrapes internship-posting sources (like GitHub's crowdsourced internship lists) for new listings, then posts them to a Discord channel as formatted embeds with interactive buttons and a dropdown. Users can mark postings as "Interested" or "Not Interested," and track their application progress (Not Started / In Progress / Waiting on Result) directly from the message. The bot stores everything in a SQLite database, avoids re-posting duplicates, and will send reminders to users who still have applications in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Post */}
      <section className="relative z-10 w-full px-5 pb-20 sm:px-8 sm:pb-24">
          <h2 className="font-pixel text-2xl text-blue-300 mb-6 text-center">Latest Post</h2>

          {latestPost ? (
          <Link
            href={`/blog/${latestPost.slug}`}
            className="block max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-white/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-sky-300/30 hover:bg-neutral-900"
          >
            <h3 className="font-pixel text-xl text-blue-300">{latestPost.title}</h3>
            <p className="text-xs text-neutral-500 mt-1">{latestPost.date}</p>
            <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{latestPost.summary}</p>
          </Link>
          ) : (
            <p className="text-center text-neutral-300">No posts yet — check back soon!</p>
          )}
      </section>
    </div>
  );
}