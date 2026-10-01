import Image from "next/image";
import Link from "next/link";
import IntroWindow, { InterestWindow, SpotifyWindow } from "@/components/MiniWindow";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <>
      <section className="h-screen w-full relative overflow-hidden flex flex-col justify-center items-center text-center">
        <IntroWindow />
        <InterestWindow />
        <SpotifyWindow />

        <div className="fixed inset-0 -z-10">
          <Image src="/header.jpg" alt="A photo of me" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-400 mix-blend-multiply" />
        </div>
      </section>

      <section className="w-full h-125 bg-gray-800 flex items-center justify-between px-16 gap-12 text-white">
        <div className="flex-1">
          <h2 className="text-3xl mb-4 font-pixel">About Me</h2>
          <p className="text-lg leading-relaxed font-sans">
            Hi, I&apos;m Maria Huan, a Computer Science undergraduate at UC Berkeley passionate about
            SWE, ML, and Robotics. I love building tools that directly interact with and benefit its users, and I&apos;m currently
            focused on developing tools (web apps, discord bots, etc.) to make life more convenient. When I&apos;m not coding, you&apos;ll
            find me drawing on Procreate, reading a comic, or hanging out with friends!
          </p>
        </div>

        <div className="flex-1 relative h-80 w-80">
          <Image
            src="/about-me.jpg"
            alt="A photo of me"
            fill
            className="object-cover object-top rounded-xl"
          />
        </div>
      </section>

      {/* Current Project highlight */}
      <section className="w-full bg-[#12152c] px-8 py-16">
        <h2 className="font-pixel text-3xl text-blue-300 mb-6 text-center">Current Project</h2>

        <div className="max-w-4xl h-70 mx-auto bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-neutral-400">current-project.txt</span>
          </div>
          <div className="p-6 text-neutral-200">
            <h3 className="text-xl font-bold text-white mb-2">Project Name Here</h3>
            <p className="text-sm leading-relaxed">
              A short description of what you&apos;re building right now.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Post */}
      <section className="w-full bg-neutral-950 px-8 pb-20">
        <h2 className="font-pixel pt-6 text-2xl text-blue-300 mb-6 text-center">Latest Post</h2>

        {latestPost ? (
          <Link
            href={`/blog/${latestPost.slug}`}
            className="block max-w-4xl mx-auto p-6 rounded-xl bg-neutral-800/60 border border-white/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400/30 hover:bg-neutral-800"
          >
            <h3 className="font-pixel text-xl text-blue-300">{latestPost.title}</h3>
            <p className="text-xs text-neutral-500 mt-1">{latestPost.date}</p>
            <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{latestPost.summary}</p>
          </Link>
        ) : (
          <p className="text-center text-neutral-500">No posts yet — check back soon!</p>
        )}
      </section>
    </>
  );
}