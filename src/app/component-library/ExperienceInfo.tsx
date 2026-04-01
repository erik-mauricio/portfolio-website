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
    <div className="flex flex-col space-y-2">
      <div className="flex justify-end">
        <h3 className="">{title}</h3>

        <h3>{date}</h3>
      </div>

      <h3 className="">
        {company} * {location}
      </h3>

      <p>{description}</p>

      <div className="space-x-2 mb-2">
        {techStack.map((tech, index) => (
          <Chip skill={tech} variant="" key={index}></Chip>
        ))}
      </div>


    </div>
  );
}
