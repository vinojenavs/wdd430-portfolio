"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const [term, setTerm] = useState(searchParams.get("query")?? "");
    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", "1");
            if (term) {
                params.set("query", term);
            } else {
                params.delete("query");
            }
            replace(`${pathName}?${params.toString()}`);
        }, 300);
        return () => clearTimeout(timeout);
    }, [term, searchParams, pathName, replace])
    return (
        <input type="search" placeholder="Search projects..." value={term} onChange={(e) => setTerm(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3"/>
    );
}