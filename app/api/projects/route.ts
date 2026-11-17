import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  let projects = getProjects();

  if (type === 'opensource' || type === 'school') {
    projects = projects.filter((project) => project.type === type);
  }

  return NextResponse.json(projects);
}
