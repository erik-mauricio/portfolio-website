import Chip from "./Chip";

type ExperienceInfoProps = {
  company: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  isActive: boolean;
  techStack: string[];
  theme?: "dark" | "light";
};

const themeStyles = {
  dark: {
    wrapper: "divide-slate-800",
    title: "text-white",
    company: "text-[#7ab8f5]",
    activeDate: "text-[#7ab8f5]",
    inactiveDate: "text-slate-400",
    subtitle: "text-slate-400",
    description: "text-slate-200",
  },
  light: {
    wrapper: "divide-slate-200",
    title: "text-slate-900",
    company: "text-[#0F4D92]",
    activeDate: "text-[#0F4D92]",
    inactiveDate: "text-slate-400",
    subtitle: "text-slate-500",
    description: "text-slate-700",
  },
};

export default function ExperienceInfo({ company, title, subtitle, description, date, isActive, techStack, theme = "dark" }: ExperienceInfoProps) {
  const s = themeStyles[theme];
  return (
    <div className="flex flex-col gap-3 py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className={`text-lg font-bold ${s.title}`}>
          {title}{" "}
          <span className={`font-semibold ${s.company}`}>@ {company}</span>
        </h3>
        <span className={`text-sm shrink-0 font-mono ${isActive ? s.activeDate : s.inactiveDate}`}>
          {isActive && <span className="mr-1" aria-hidden="true"></span>}{date}
        </span>
      </div>

      <p className={`text-xs uppercase tracking-widest ${s.subtitle}`}>{subtitle}</p>

      <p className={`text-base leading-relaxed ${s.description}`}>{description}</p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-1" role="list" aria-label="Technologies used">
          {techStack.map((tech, index) => (
            <span role="listitem" key={index}>
              <Chip skill={tech} variant="tech" theme={theme} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
