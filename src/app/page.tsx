"use client";
import Image from "next/image";

import Card from "./component-library/Card";
import Chip from "./component-library/Chip";
import ExperienceInfo from "./component-library/ExperienceInfo";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const languages = ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS"];

  const technologies = [
    "React", "Next.js", "Node.js", "Express.js", "Flask", "FastAPI",
    "Streamlit", "Tailwind CSS", "Socket.io", "Pandas", "XGBoost", "Mapbox GL",
  ];

  const tools = ["PostgreSQL", "MongoDB", "Docker", "Git", "OpenAI API"];

  const experiences = [
    {
      company: "Cornell Hack4Impact",
      title: "Software Developer",
      subtitle: "ITHACA, NY · RETHINK FOOD",
      date: "Aug. 2025 – Present",
      isActive: true,
      description:
        "Built a -based dashboard on Mapbox GL tracing 40,000+ meals across NYC and Miami. Wrote the REST layer, the filter UI, and the Postgres schema that keeps everything in sync. The visualization made field ops actually look at their data — which is the whole point.",
      techStack: ["React", "Mapbox GL", "PostgreSQL", "Express", "Node"],
    },
    {
      company: "Cornell University",
      title: "Undergraduate Teaching Assistant",
      subtitle: "INFO 2300 · FULL-STACK DEV",
      date: "Aug. 2025 – Present",
      isActive: true,
      description:
        "Run weekly labs and OH for 24 students wrangling React, Node, Mongo and their first real bug. Half the job is debugging; the other half is convincing people they're not as stuck as they feel. I like both halves.",
      techStack: ["React", "Node", "Express", "MongoDB", "Debugging"],
    },
    {
      company: "ThinkNeuro LLC",
      title: "Software Engineering Intern",
      subtitle: "REMOTE · EDTECH",
      date: "Jun. 2025 – Aug. 2025",
      isActive: false,
      description:
        "Shipped a B2B license dashboard tracking enrollments, kit shipments, and engagement. Automated the CSV ingestion that used to eat an afternoon every Monday, and wrote the flags that catch inactive students before a district does.",
      techStack: ["Streamlit", "Pandas", "Python"],
    },
    {
      company: "Lambda Upsilon Lambda Fraternity, Inc.",
      title: "Chapter President",
      subtitle: "ITHACA, NY · STUDENT ORG",
      date: "Mar. 2025 – Present",
      isActive: true,
      description:
        "Directed chapter strategy, operations, and recruitment for a 6-member chapter. Organized 15+ campus events and established partnerships with 7 student organizations, increasing chapter visibility and community engagement.",
      techStack: [],
    },
  ];

  const projects = [
    {
      title: "Tiempos Perfectos",
      description:
        "Full-stack Spanish learning app with verb conjugation drills, reading comprehension exercises, and real-time AI conversation practice.",
      date: "June 2025 – Aug. 2025",
      techStack: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Socket.io"],
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

  const isLight = theme === "light";

  const bg          = isLight ? "bg-slate-50"  : "bg-slate-900";
  const sectionBg   = isLight ? "bg-slate-50 text-slate-900" : "bg-slate-900 text-slate-100";
  const heading     = isLight ? "text-slate-900" : "text-slate-100";
  const subText     = isLight ? "text-slate-500" : "text-slate-400";
  const bodyText    = isLight ? "text-slate-700" : "text-slate-300";
  const accent      = isLight ? "text-[#0F4D92]" : "text-[#7ab8f5]";
  const divider     = isLight ? "border-slate-200" : "border-slate-700/60";
  const expDivider  = isLight ? "divide-slate-200" : "divide-slate-700/60";
  const chipLabel   = isLight ? "font-bold text-slate-700" : "font-bold text-slate-300";

  const cardTitle  = isLight ? "text-slate-900" : "text-slate-100";
  const cardBody   = isLight ? "text-slate-600" : "text-slate-300";
  const cardDate   = "text-slate-400";
  const cardBtn    = isLight
    ? "border-slate-300 text-slate-500 bg-white hover:border-slate-500 hover:text-slate-800"
    : "border-slate-600 text-slate-400 bg-slate-800 hover:border-slate-400 hover:text-slate-200";

  const footerBg   = isLight ? "bg-slate-100"  : "bg-slate-900";
  const footerText = isLight ? "text-slate-500" : "text-slate-500";
  const footerLink = isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-slate-200";
  const footerDivider = isLight ? "border-slate-300" : "border-slate-700/60";

  return (
    <>
      {/* Nav bar */}
      <div className="sticky top-0 z-50 flex justify-center px-4 pt-4 pb-2 bg-slate-50 dark:bg-slate-900">
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <a href="#about"    className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Home</a>
          <a href="#about"    className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">About</a>
          <a href="#skills"   className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">Skills</a>
          <a href="#projects" className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">Projects</a>
          <a href="#work"     className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">Achievements</a>
          <a href="mailto:em882@cornell.edu" className="px-3 py-1.5 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">Contact</a>
        </nav>
      </div>

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Switch to dark mode"
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${isLight ? "border-slate-200 bg-white text-slate-600 hover:bg-slate-100" : "border-slate-700 bg-slate-800 text-slate-400 opacity-50 hover:opacity-100"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Switch to light mode"
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${!isLight ? "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-400 opacity-50 hover:opacity-100"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>

      {/* Hero */}
      <section id="about" className={`w-full pt-32 pb-20 px-8 transition-colors ${sectionBg}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-lg">
            <h1 className={`text-7xl font-bold leading-none tracking-tight ${heading}`}>
              Erik Mauricio
            </h1>
            <p className={`text-xl leading-relaxed ${bodyText}`}>
              <span className={`font-bold ${heading}`}>Software engineer</span> from New York, currently at{" "}
              <span className={`font-bold ${accent}`}>Cornell</span>. I 
            </p>
          </div>

          <div className="shrink-0 overflow-hidden rounded-2xl ring-4 ring-[#0F4D92]">
            <Image
              src="/images/headshot.jpg"
              alt="Erik Mauricio"
              width={280}
              height={280}
              className="rounded-2xl object-cover w-64 h-64 transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className={`w-full px-8 py-16 transition-colors ${sectionBg}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className={`font-bold text-4xl ${heading}`}>What I've done</h2>
          </div>
          <div className={`border-t mb-8 ${divider}`} />

          <div className={`divide-y ${expDivider}`}>
            {experiences.map((exp, i) => (
              <ExperienceInfo
                key={i}
                company={exp.company}
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                date={exp.date}
                isActive={exp.isActive}
                techStack={exp.techStack}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </section>

      <div className={`flex flex-col flex-1 items-center justify-center font-sans transition-colors ${bg}`}>
        <main className="flex flex-1 w-full max-w-4xl flex-col gap-10 pt-12 pb-12 px-8 sm:items-start">

          {/* Projects */}
          <section id="projects">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className={`font-bold text-4xl ${heading}`}>What I've Built</h2>
              
            </div>
            <div className={`border-t mb-8 ${divider}`} />

            <div className="flex flex-wrap gap-4">
              {projects.map((project, i) => (
                <div key={i} className="w-full sm:w-[calc(50%-0.5rem)]">
                  <Card theme={theme}>
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className={`font-bold text-base ${cardTitle}`}>{project.title}</h3>
                        <span className={`text-xs ${cardDate}`}>{project.date}</span>
                      </div>
                      <p className={`text-base leading-relaxed ${cardBody}`}>{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, j) => (
                          <Chip skill={tech} variant="tech" theme={theme} key={j} />
                        ))}
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}>
                          Github
                        </button>
                        <button className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}>
                          Live
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className={`font-bold text-4xl ${heading}`}>What I use</h2>
            </div>
            <div className={`border-t mb-8 ${divider}`} />

            <div className="space-y-5">
              <div>
                <p className={`mb-2 ${chipLabel}`}>Programming Languages</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, i) => (
                    <Chip skill={lang} variant="programming" theme={theme} key={i} />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-2 ${chipLabel}`}>Frameworks & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((lang, i) => (
                    <Chip skill={lang} variant="framework" theme={theme} key={i} />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-2 ${chipLabel}`}>Developer Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((lang, i) => (
                    <Chip skill={lang} variant="tool" theme={theme} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className={`w-full py-16 px-8 transition-colors ${footerBg}`}>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <p className={`uppercase tracking-widest text-sm ${footerText}`}>Erik Mauricio</p>
            <div className={`w-12 border-t ${footerDivider}`} />
            <div className={`flex items-center gap-8 text-sm ${footerLink}`}>
              <a href="https://github.com/erik-mauricio" className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded">GitHub</a>
              <a href="https://linkedin.com/in/erik-mauricio" className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded">LinkedIn</a>
              <a href="mailto:em882@cornell.edu" className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded">Email</a>
              <a href="/resume.pdf" className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded">Resume</a>
            </div>
            <p className={`text-sm ${footerText}`}>© 2026 Erik Mauricio</p>
          </div>
        </footer>
      </div>
    </>
  );
}
