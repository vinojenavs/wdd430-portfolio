"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact Us' }
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav>
            <ul className="flex gap-4 p-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.href} className="text-white-900">
                            <Link href={link.href} aria-current={isActive ? 'page' : undefined} className={`rounded font-medium ${isActive ? 'rounded text-blue-900 bg-blue-100 p-2' : 'text-white-900 p-2 hover:bg-blue-100 hover:text-blue-900'}`}>{link.label}</Link>
                        </li>
                    );
                })};
            </ul>
        </nav>
    );
};
