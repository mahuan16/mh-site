import { Mail } from 'lucide-react';
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="justify-center items-center min-h-screen flex flex-col md:flex-row p-8 gap-12 ">

      <div className="fixed inset-0 -z-10">
        <Image src="/contact-bg.jpg" alt="A photo of the Campanille" fill className="object-cover object-top"/>
        <div className="absolute inset-0 bg-neutral-400 mix-blend-multiply" />
      </div>

      {/* Left: contact form, mac-window style */}
      <div className="flex-1 max-w-md w-full bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-neutral-400">contact-me.txt</span>
        </div>

        <div className="p-6">
          <h1 className="font-pixel text-3xl mb-6 text-blue-300">Get In Touch</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-neutral-800/60 text-white border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-neutral-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-neutral-800/60 text-white border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-neutral-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg bg-neutral-800/60 text-white border border-white/10 focus:outline-none focus:border-blue-400 transition-colors placeholder:text-neutral-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 transition-colors text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right: links */}
      <div className="flex-1 flex flex-col ml-10 items-start gap-4">
        <h2 className="font-pixel text-2xl mb-2 text-blue-300">Find Me Elsewhere</h2>

        <a href="/resume.pdf" download className="flex text-white items-center gap-2 hover:text-blue-400 transition-colors">
          Download Resume
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex text-white items-center gap-2 hover:text-blue-400 transition-colors">
          <FaLinkedin size={18} /> LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex text-white items-center gap-2 hover:text-blue-400 transition-colors">
          <FaGithub size={18} /> GitHub
        </a>
        <a href="mailto:youremail@gmail.com" className="flex items-center text-white gap-2 hover:text-blue-400 transition-colors">
          <Mail size={18} /> Email
        </a>
      </div>

    </section>
  );
}