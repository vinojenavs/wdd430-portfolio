import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id: projectId } = await params;
  const id = Number(projectId);
  // Validate project ID
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
  }
  // Find project
  const project = await getProjectById(id);
  // Return 404 if project doesn't exist
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}
