 import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  const projectId = Number(id);

  // Validate project ID
  if (!Number.isInteger(projectId) || projectId <= 0) {
    return NextResponse.json(
      { error: 'Invalid project ID' },
      { status: 400 }
    );
  }

  // Find project
  const project = getProjectById(projectId);

  // Return 404 if project doesn't exist
  if (!project) {
    return NextResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(project, { status: 200 });
}
