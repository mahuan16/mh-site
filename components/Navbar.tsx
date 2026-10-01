import Link from 'next/link';

export default function Navbar({ fontClass }: { fontClass: string }) {
    return (
    <nav className={`${fontClass} relative sm:absolute top-0 left-0 w-full flex flex-col sm:flex-row text-base sm:text-xl justify-between items-center z-50 px-5 py-4 sm:px-8 gap-4 bg-slate-950/35 backdrop-blur-sm border-b border-white/10 text-blue-100`}>
        <a href="/Maria_Huan_Resume.pdf" download className="hover:text-sky-300 transition-colors text-xl sm:text-2xl">
            Maria&apos;s Resume
        </a>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:gap-x-8">
            <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-sky-300 transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-sky-300 transition-colors">Blog</Link>
            <Link href="/contacts" className="hover:text-sky-300 transition-colors">Contact</Link>
        </div>
    </nav>
    );
}