"use client";
import Image from "next/image";

import Card from "./component-library/Card";
import Chip from "./component-library/Chip";
import ExperienceInfo from "./component-library/ExperienceInfo";

export default function Home() {
  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "HTML",
    "CSS",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "FastAPI",
    "Streamlit",
    "Tailwind CSS",
    "Socket.io",
    "Pandas",
    "XGBoost",
    "Mapbox GL",
  ];

  const tools = ["PostgreSQL", "MongoDB", "Docker", "Git", "OpenAI API"];

  const experiences = [
    {
      company: "Cornell Hack4Impact",
      title: "Software Developer",
      location: "Ithaca, NY",
      date: "Aug. 2025 – Present",
      description:
        "Developed a map-based web app using Mapbox GL for Rethink Food to visualize the flow of 40,000+ meals across NYC and Miami. Implemented REST APIs, dynamic visualizations, and responsive filtering components backed by a centralized PostgreSQL database.",
      techStack: ["React", "Mapbox GL", "PostgreSQL", "Express.js", "Node.js"],
    },
    {
      company: "Cornell University",
      title: "Undergraduate Teaching Assistant",
      location: "Ithaca, NY",
      date: "Aug. 2025 – Present",
      description:
        "Led weekly lab sections and office hours for 24 students in a full-stack development course, reinforcing concepts in React, Node.js, Express.js, MongoDB, debugging, and web accessibility.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      company: "ThinkNeuro LLC",
      title: "Software Engineering Intern",
      location: "Remote",
      date: "June 2025 – Aug. 2025",
      description:
        "Developed a B2B license dashboard to track student enrollment, kit shipments, and engagement. Automated CSV data ingestion and designed features to flag inactive students and missing kits.",
      techStack: ["Streamlit", "Pandas"],
    },
    {
      company: "Lambda Upsilon Lambda Fraternity, Inc.",
      title: "Chapter President",
      location: "Ithaca, NY",
      date: "Mar. 2025 – Present",
      description:
        "Directed chapter strategy, operations, and recruitment for a 6-member chapter. Organized 15+ campus events and established partnerships with 7 student organizations, increasing chapter visibility and community engagement.",
      techStack: [],
    },
  ];

  const projects = [
    {
      title: "CashPilot",
      description:
        "AI-powered platform that analyzes transactions to detect subscriptions, predict cash-flow risk, and generate personalized financial insights.",
      date: "Mar. 2026 – Present",
      techStack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "FastAPI",
        "XGBoost",
        "Docker",
      ],
      github: "https://github.com/erik-mauricio/cashpilot",
      live: "",
      imageURI: "/images/cashpilot.png",
    },
    {
      title: "Tiempos Perfectos",
      description:
        "Full-stack Spanish learning app with verb conjugation drills, reading comprehension exercises, and real-time AI conversation practice.",
      date: "June 2025 – Aug. 2025",
      techStack: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Socket.io",
      ],
      github: "https://github.com/erik-mauricio/tiempos-perfectos",
      live: "",
      imageURI: "/images/tiempos-perfectos.png",
    },
    {
      title: "Sports Team Finder",
      description:
        "Search engine that lets users discover sports teams through natural language queries powered by a custom TF-IDF and cosine similarity pipeline.",
      date: "Feb. 2025 – Present",
      techStack: ["Python", "Flask", "TF-IDF", "Cosine Similarity"],
      github: "https://github.com/erik-mauricio/sports-team-finder",
      live: "",
      imageURI: "/images/sports-team-finder.png",
    },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-zinc-900 text-white px-5 py-2.5 rounded-full shadow-lg text-sm whitespace-nowrap">
        <div className="flex items-center gap-2 pr-4 border-r border-zinc-700">
          <span className="uppercase tracking-widest text-xs font-medium text-zinc-300">Erik Mauricio</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-zinc-300 hover:text-white transition-colors">Skills</a>
          <a href="#work" className="text-zinc-300 hover:text-white transition-colors">Work</a>
          <a href="#projects" className="text-zinc-300 hover:text-white transition-colors">Projects</a>
        </div>

        <a
          href="mailto:em882@cornell.edu"
          className="ml-2 bg-red-800 hover:bg-red-700 transition-colors text-white font-bold px-4 py-2 rounded-full"
        >
          Let's talk →
        </a>
      </nav>
      {/* Hero */}
      <section id="about" className="w-full bg-zinc-950 text-white pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-lg">
            <h1 className="text-7xl font-bold leading-none tracking-tight">
              Erik Mauricio.
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed">
              <span className="font-bold text-white">Software engineer</span> from New York, currently at{" "}
              <span className="font-bold text-white">Cornell</span>. I build full-stack apps and data tools
              that quietly do the right thing — the kind of engineer you want on call when something breaks
              at 2am.{" "}
              <span className="text-zinc-500">(Friendly neighborhood, etc.)</span>
            </p>
          </div>

          <div className="shrink-0">
            <Image
              src="/images/headshot.jpg"
              alt="Erik Mauricio"
              width={280}
              height={280}
              className="rounded-2xl object-cover w-64 h-64 ring-4 ring-zinc-800"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-4xl flex-col gap-10 pt-12 pb-12 px-8 bg-white dark:bg-black sm:items-start">

          <section id="work">
            <h2 className="font-bold text-2xl">Experience and Leadership</h2>

            <div className="border-l-2 border-gray-300 pl-4 divide-y">
              {experiences.map((experience, index) => (
                <ExperienceInfo
                  key={index}
                  company={experience.company}
                  title={experience.title}
                  location={experience.location}
                  description={experience.description}
                  date={experience.date}
                  techStack={experience.techStack}
                />
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="font-bold text-2xl">Projects</h2>

            <div className="flex flex-wrap gap-4 ">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-0.5rem)] "
                >
                  <Card>
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className="font-bold text-base">{project.title}</h3>
                        <span className="text-xs text-gray-400">{project.date}</span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, index) => (
                          <Chip skill={tech} variant="tech" key={index}></Chip>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-1">
                        <button className="inline-block text-xs px-3 py-1 rounded-lg border border-gray-200 text-gray-600 bg-gray-50 font-mono">
                          Github
                        </button>
                        <button className="inline-block text-xs px-3 py-1 rounded-lg border border-gray-200 text-gray-600 bg-gray-50 font-mono">
                          Live
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          <section id="skills">
            <h2 className="font-bold text-2xl">Skills</h2>

            <div className="space-y-2">
              <h3>
                <div className="space-x-2">
                  <span className="font-bold">Programming Languages:</span>{" "}
                  {languages.map((lang, index) => (
                    <Chip skill={lang} variant="programming" key={index}></Chip>
                  ))}{" "}
                </div>
              </h3>

              <h3>
                <span className="font-bold">Frameworks:</span>{" "}
                <div className="space-x-2">
                  {technologies.map((lang, index) => (
                    <Chip skill={lang} variant="framework" key={index}></Chip>
                  ))}
                </div>
              </h3>

              <h3>
                <div className="space-x-2">
                  <span className="font-bold">Developer Tools:</span>{" "}
                  {tools.map((lang, index) => (
                    <Chip skill={lang} variant="tool" key={index}></Chip>
                  ))}
                </div>
              </h3>
            </div>
          </section>
        </main>
        <footer className="text-center bg-slate-700 w-full">
          <p>Developed by Erik Mauricio</p>
          <p>Last updated: April 2026</p>
        </footer>
      </div>
    </>
  );
}
