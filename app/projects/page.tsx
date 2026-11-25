
import { deleteProject } from '@/lib/actions';
import { Suspense } from 'react';
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import Link from 'next/link';

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">
        All Projects
      </h1>
      <Suspense fallback={<input
        disabled
        placeholder="Loading search..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />}>
        <ProjectSearch />
      </Suspense> 
      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectContent searchParams={searchParams} />
      </Suspense>
      <Link href="/projects/create" className="inline-block rounded-lg bg-blue-500 my-2 px-4 py-3 text-white hover:bg-blue-600">Create Project</Link>
    </section>
  );
}

async function ProjectContent({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;

  const query = params.query || '';
  const currentPage = Number(params.page) || 1;

  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );

  const totalPages = await fetchProjectsPages(query);

  return (
    <>
      <div className="grid gap-6 my-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard {...project} />
            <Link href={`/projects/${project.id}/edit`} className="mt-3 inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Edit Project
            </Link>
            <form action={deleteProject.bind(null, String(project.id))}>
              <button type="submit" className="mt-3 inline-block rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                Delete Project
              </button>
            </form>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-6 text-center">
          No projects found.
        </p>
      )}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
