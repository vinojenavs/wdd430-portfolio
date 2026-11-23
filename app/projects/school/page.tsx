import { Suspense } from "react";
import SchoolProjectsList from "@/components/SchoolProjects";
import SchoolProjectSkeleton from "@/components/SchoolProjectSkeleton";

export default async function SchoolProjectsPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">School Projects</h1>
      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectsList />
      </Suspense>
    </section>
  )
}