import { updateProject } from "@/lib/actions";
import { getProjectById } from "@/lib/projects-db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export const instant = false;

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const projectData = await getProjectById(Number(id));
    if (!projectData) {
        notFound();
    }
    return (<Suspense fallback>
        <form action={updateProject.bind(null, String(id))} className="grid gap-4 m-5">
            <label htmlFor="title"><strong>Project Title:</strong></label>
            <input type="text" id="title" name="title" defaultValue={projectData.title} className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="description"><strong>Project Description:</strong></label>
            <textarea id="description" name="description" defaultValue={projectData.description} className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="technologies"><strong>Technologies Used:</strong></label>
            <input type="text" id="technologies" name="technologies" defaultValue={projectData.technologies.join(', ')} className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="link"><strong>Project Link:</strong></label>
            <input type="url" id="link" name="link" defaultValue={projectData.link} className="rounded-lg border border-gray-300 px-4 py-3" />

            <button type="submit" className="inline-block rounded-lg bg-blue-500 my-0 mx-auto px-4 py-3 text-white hover:bg-blue-600 max-w-sm">Update Project</button>
        </form>

    </Suspense>)
}