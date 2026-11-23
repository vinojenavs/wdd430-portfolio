
import { Suspense } from 'react';
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

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

      <Suspense fallback={<p>Loading search...</p>}>
        <ProjectSearch />
      </Suspense>

      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectContent searchParams={searchParams} />
      </Suspense>
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
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
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
