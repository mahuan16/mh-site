import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ fontClass }: { fontClass: string }) {
  return (
    <footer className={`${fontClass} px-6 py-8 z-5 min-h-32 flex flex-col items-center justify-center gap-3 text-center text-xs sm:text-sm bg-slate-950 text-slate-300 border-t border-white/10`}>
        <p>&copy; {new Date().getFullYear()} Maria Huan. All rights reserved.</p>
        <div className="flex justify-center gap-5">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/maria-huan-7783b2315/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors">
                <FaLinkedin size={20} />
            </a>
            <a aria-label="GitHub" href="https://github.com/mahuan16" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors">
                <FaGithub size={20} />
            </a>
            <a aria-label="Email" href="mailto:mahuan@berkeley.edu" className="hover:text-sky-300 transition-colors">
                <Mail size={20} />
            </a>
        </div>
    </footer>
  );
}