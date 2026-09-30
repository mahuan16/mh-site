import Image from "next/image";
import IntroWindow , {InterestWindow}  from "@/components/MiniWindow";

export default function Home() {
  return (
    <>
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-center items-center text-center">
      
      <IntroWindow />
      <InterestWindow />

      <div className="fixed inset-0 -z-10">
        <Image src="/header.jpg" alt="A photo of me" fill className="object-cover object-top"/>
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
  </>
  );
}
