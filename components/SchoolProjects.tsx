"use cache";

import { getProjects } from "@/lib/projects-db";
import ProjectCard from "./ProjectCard";

export default async function SchoolProjectsList() {
    const projects = await getProjects('school');
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    )
}