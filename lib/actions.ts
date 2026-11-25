'use server';

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProjectFormSchema = z.object({
    title: z.string().min(2).max(200),
    description: z.string().min(10).max(250),
    technologies: z.array(z.string().min(2).max(200)).min(1).max(20),
    link: z.string().url().optional()
});

export async function createProject(data: FormData) {
    const raw = {
        title: data.get("title"),
        description: data.get("description"),
        technologies: String(data.get("technologies") ?? "").split(",").map((tech) => tech.trim()).filter(Boolean),
        link: data.get("link") || undefined
    };
    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        return redirect("/projects/create?error=Invalid project input");
    }
    const { title, description, technologies, link } = parsed.data;
    await sql`INSERT INTO projects (title, description, technologies, link) VALUES (${title}, ${description}, ${`{${technologies.map(t => `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`).join(",")}}`}::text[], ${link})`;
    revalidatePath("/projects");
    redirect("/projects");
}

export async function updateProject(id: string, data: FormData) {
    const raw = {
        title: data.get("title"),
        description: data.get("description"),
        technologies: String(data.get("technologies") ?? "").split(",").map((tech) => tech.trim()).filter(Boolean),
        link: data.get("link") || undefined
    };
    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        return redirect("/projects/create?error=Invalid project input");
    }
    const { title, description, technologies, link } = parsed.data;
    await sql`UPDATE projects SET title = ${title}, description = ${description}, technologies = ${`{${technologies.map(t => `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`).join(",")}}`}::text[], link = ${link} WHERE id = ${id}`;
    revalidatePath("/projects");
    redirect("/projects");
}

export async function deleteProject(id: string) {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath("/projects");
    redirect("/projects");
}