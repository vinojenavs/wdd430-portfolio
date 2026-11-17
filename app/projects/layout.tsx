import Link from "next/link";

export default function ProjectLayout ({ children } : { children: React.ReactNode }) {
    return (
        <section className="p-4">
            <Link href="/projects" className="p-4">Projects</Link>
            <Link href="/projects/settings" className="p-4">Project Settings</Link>
            {children}
        </section>
    )
}
