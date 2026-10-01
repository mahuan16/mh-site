import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden justify-center items-center min-h-[calc(100vh-5rem)] flex flex-col md:flex-row px-5 pt-28 pb-12 sm:px-8 sm:py-28 gap-10 lg:gap-16">

      <div className="absolute inset-0 z-0">
        <div
          role="img"
          aria-label="A photo of the Campanille"
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/contact-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
      </div>

      {/* Left: contact form, mac-window style */}
      <div className="relative z-10 flex-1 max-w-md w-full bg-slate-950/85 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 bg-neutral-800/80 px-3 py-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-neutral-400">contact-me.txt</span>
        </div>

        <div className="p-6">
          <h1 className="font-pixel text-2xl sm:text-3xl mb-6 text-sky-300">Get In Touch</h1>
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
              className="bg-sky-500 hover:bg-sky-400 transition-colors text-slate-950 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right: links */}
      <div className="relative z-10 flex-1 max-w-md w-full flex flex-col items-start gap-4">
        <h2 className="font-pixel text-2xl mb-2 text-sky-300">Find Me Elsewhere</h2>

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