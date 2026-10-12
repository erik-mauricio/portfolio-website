import Chip from "./Chip";

type ExperienceInfoProps = {
  company: string;
  title: string;
  subtitle: string;
  description: string[];
  date: string;
  isActive: boolean;
  techStack: string[];
};

export default function ExperienceInfo({
  company,
  title,
  subtitle,
  description,
  date,
  isActive,
  techStack,
}: ExperienceInfoProps) {
  return (
    <div className="flex flex-col gap-3 py-6">
      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="font-display text-lg font-bold text-base-content">
          {title} <span className="font-semibold text-primary">@ {company}</span>
        </h3>
        <span
          className={`text-sm shrink-0 font-mono ${isActive ? "text-primary" : "text-base-content/40"}`}
        >
          {date}
        </span>
      </div>

      <p className="text-xs uppercase tracking-widest text-base-content/60">
        {subtitle}
      </p>

      <p className="text-base leading-relaxed text-base-content/80">
        {description}
      </p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-1" role="list" aria-label="Technologies used">
          {techStack.map((tech, index) => (
            <span role="listitem" key={index}>
              <Chip skill={tech} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
