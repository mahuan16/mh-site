import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ fontClass }: { fontClass: string }) {
  return (
    <footer className={`${fontClass} p-6 z-5 h-32 grid place-items-center text-center text-sm bg-gray-900 text-white`}>
        <p>&copy; {new Date().getFullYear()} Maria Huan. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/maria-huan-7783b2315/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/mahuan16" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaGithub size={20} />
            </a>
            <a href="mailto:mahuan@berkeley.edu" className="hover:text-blue-500 transition-colors">
                <Mail size={20} />
            </a>
        </div>
    </footer>
  );
}