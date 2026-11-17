export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: 'Music Xplorer',
        description: 'Web application helping users discover new songs',
        type: 'opensource',
        technologies: ['Html', 'Javascript', 'CSS'],
        link: 'https://vinojenavs.github.io/wdd330-Music-Xplorer/'
    },
    {
        id: 2,
        title: 'Service Network',
        description: 'Web application allowing users to register and volunteer for service projects',
        type: 'school',
        technologies: ['Node.js', 'Javascript', 'CSS', 'PostgreSQL'],
        link: 'https://cse340-lez7.onrender.com/'
    },
    {
        id: 3,
        title: 'Delta Fresh Produce',
        description: 'Website connecting farmers and consumers by displaying seasonal produce',
        type: 'school',
        technologies: ['Html', 'Javascript', 'CSS'],
        link: 'https://vinojenavs.github.io/wdd231/finalproject/'
    }
];

export function getProjects(type?: string | null): Project[] {
    if (type) return projects.filter(p => p.type === type);
    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find(p => p.id === id) ?? null;
}