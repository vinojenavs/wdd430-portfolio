import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="text-2x1 font-bold">Onavino Ajenavi</div>
            <nav className="max-w-4x1 mx-auto px-4 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}