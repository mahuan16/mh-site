import Image from "next/image";
import IntroWindow , {InterestWindow}  from "@/components/MiniWindow";

export default function Home() {
  return (
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-center items-center text-center">
      
      <IntroWindow />
      <InterestWindow />

      <div className="fixed inset-0 -z-10">
        <Image src="/header.jpg" alt="A photo of me" fill className="object-cover object-top"/>
      </div>


    </section>
  );
}
