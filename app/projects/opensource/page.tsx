"use cache";
import { getProjects } from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';

export default async function OpenSourceProjectsPage() {
  const projects = await getProjects('opensource');

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        Open Source Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}