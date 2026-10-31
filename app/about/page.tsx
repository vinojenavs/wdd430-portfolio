import SkillsList from "@/components/SkillsList";

const skills = [
    {
        name: 'Html',
        masteryLevel: 'Expert'
    },
    {
        name: 'CSS',
        masteryLevel: 'Expert'
    },
    {
        name: 'Javascript',
        masteryLevel: 'Proficient',
    },
    {
        name: 'MySQL',
        masteryLevel: 'Proficient'
    },
    {
        name: 'PostgreSQL',
        masteryLevel: 'Competent'
    },
    {
        name: 'C#',
        masteryLevel: 'Competent'
    },
    {
        name: 'MongoDB',
        masteryLevel: 'Advanced Beginner'
    },
    {
        name: 'Python',
        masteryLevel: 'Advanced Beginner'
    }
]

export default function About() {
    return (
        <main className="container mx-auto px-4 py-12">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-gray-700">I am a full-stack web developer currently schooling at BYU Idaho. I have been learning how to write code for 2 years now and I built multiple websites and applications. I have worked with three programming languages; Javascript, Python and C# but I am most proficient in Javascript. I want to continue improving my skills as a developer and possibly make an impact in our technological advancement.</p>
            </section>
            <SkillsList skills={skills}/>
        </main>
    );
}