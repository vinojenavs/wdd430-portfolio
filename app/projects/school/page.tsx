"use cache";
import type { Project } from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';

async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    'http://localhost:3000/api/projects?type=school',
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch school projects');
  }

  return (await response.json()) as Project[];
}

export default async function SchoolProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        School Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}