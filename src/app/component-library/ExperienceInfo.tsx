import Chip from "./Chip";
type ExperienceInfoProps = {
  company: string;
  title: string;
  location: string;
  description: string;
  date: string;
  techStack: string[];
};

export default function ExperienceInfo({company, title, location, description, date, techStack}: ExperienceInfoProps) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div className="flex justify-between items-start">
        <span className="font-bold text-base">{title}</span>
        <span className="text-xs text-gray-400 shrink-0 ml-4">{date}</span>
      </div>

      <div className="text-sm text-gray-500">
        {company} · {location}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-1">
        {techStack.map((tech, index) => (
          <Chip skill={tech} variant="tech" key={index}></Chip>
        ))}
      </div>
    </div>
  );
}
