import Image from "next/image";
import ProjectList from "@/components/ProjectList";
import { title } from "process";

const projects = [
  {
    title: 'Music Xplorer',
    description: 'Web application helping users discover new songs',
    technologies: ['Html', 'Javascript', 'CSS'],
    link: 'https://vinojenavs.github.io/wdd330-Music-Xplorer/'
  },
  {
    title: 'Service Network',
    description: 'Web application allowing users to register and volunteer for service projects',
    technologies: ['Node.js', 'Javascript', 'CSS', 'PostgreSQL'],
    link: 'https://cse340-lez7.onrender.com/'
  },
  {
    title: 'Delta Fresh Produce',
    description: 'Website connecting farmers and consumers by displaying seasonal produce',
    technologies: ['Html', 'Javascript', 'CSS'],
    link: 'https://vinojenavs.github.io/wdd231/finalproject/'
  }
]

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
