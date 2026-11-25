import { createProject } from "@/lib/actions";

export default async function CreateProjectPage() {
    return (
        <form action={createProject} className="grid gap-4 m-5">
            <label htmlFor="title"><strong>Project Title:</strong></label>
            <input type="text" id="title" name="title" placeholder="Project Title" className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="description"><strong>Project Description:</strong></label>
            <textarea id="description" name="description" placeholder="Project Description" className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="technologies"><strong>Technologies Used:</strong></label>
            <input type="text" id="technologies" name="technologies" placeholder="Technologies Used" className="rounded-lg border border-gray-300 px-4 py-3" />

            <label htmlFor="link"><strong>Project Link:</strong></label>
            <input type="url" id="link" name="link" placeholder="Project Link" className="rounded-lg border border-gray-300 px-4 py-3" />

            <button type="submit" className="inline-block rounded-lg bg-blue-500 my-0 mx-auto px-4 py-3 text-white hover:bg-blue-600 max-w-sm">Create Project</button>
        </form>
    )
}