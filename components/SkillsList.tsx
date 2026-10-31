import SkillCard from "./SkillCard";

interface SkillCardProps {
    name: string;
    masteryLevel: string;
}

interface Skills {
    skills: SkillCardProps[];
}

export default function SkillsList ({skills}: Skills) {
    return (
        <section className="flex flex-row flex-wrap gap-3">
            {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </section>
    );
}