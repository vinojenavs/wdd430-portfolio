interface SkillCardProps {
    name: string;
    masteryLevel: string;
}

export default function SkillCard ({name, masteryLevel}: SkillCardProps) {
    return (
        <article className="p-4 border border-gray-200 bg-white rounded">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600"><strong>{masteryLevel}</strong></p>
        </article>
    );
}