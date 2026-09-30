import Link from 'next/link';

export default function Navbar({ fontClass }: { fontClass: string }) {
    return (


    <nav className={`${fontClass} absolute top-0 left-0 w-full flex text-xl justify-between items-center z-50 p-4 gap-30 pr-20 bg-transparent shadow-lg text-blue-200`}>
        <a href="/Maria_Huan_Resume.pdf" download className="hover:text-blue-400 transition-colors text-2xl">
            Maria&apos;s Resume
        </a>
        <div className="flex gap-30">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>  
            <Link href="/contacts" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
    </nav>
    );
}