import Link from 'next/link';

export default function Navbar({ fontClass }: { fontClass: string }) {
    return (
    <nav className={`${fontClass} flex text-xl justify-end items-center z-50 p-4 gap-30 pr-20 bg-transparent shadow-lg shadow-blue-950/50 text-blue-200`}>
        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
        <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>  
        <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
    </nav>
    );
}