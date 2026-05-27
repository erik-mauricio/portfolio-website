"use client";
import Image from "next/image";

import Card from "./component-library/Card";
import Chip from "./component-library/Chip";
import ExperienceInfo from "./component-library/ExperienceInfo";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
    "HTML",
    "CSS",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "Streamlit",
    "Tailwind CSS",
    "Socket.io",
    "Pandas",
    "NumPy",
    "Mapbox GL",
  ];

  const tools = ["PostgreSQL", "MongoDB", "Docker", "Git", "REST APIs", "OpenAI API", "Claude Code", "RAG", "TF-IDF", "Word2Vec"];

  const experiences = [
    {
      company: "Cornell Hack4Impact",
      title: "Software Developer",
      subtitle: "ITHACA, NY · RETHINK FOOD",
      date: "Aug. 2025 – Present",
      isActive: true,
      description: [
        "Developed REST API endpoints for restaurants, Community-Based Organizations (CBOs), and meal-provider relationships, joining data across 3 relational database tables to power dynamic sidebar and popup components for 204 partner organizations.",
        "Integrated Mapbox and Geocoding APIs to convert street addresses to coordinates, rendering color-coded markers for 135 CBOs and 69 restaurants across 5 NYC boroughs serving 30,000 meals/week.",
        "Designed interactive CBO-Restaurant relationship visualization using Deck.gl, rendering curved arrows to trace meal supply chains and a priority-ordered tag system highlighting underserved communities by poverty threshold.",
      ],
      techStack: ["React", "Mapbox GL", "PostgreSQL", "Express", "Node"],
    },
    {
      company: "Cornell University",
      title: "Undergraduate Teaching Assistant",
      subtitle: "INFO 2300 · FULL-STACK DEV",
      date: "Aug. 2025 – Present",
      isActive: true,
      description: [
        "Led weekly lab sections and office hours for 20+ students in a full-stack development course (React, Node.js, Express.js, MongoDB), facilitating hands-on exercises and debugging sessions.",
        "Evaluated assignments and provided individualized feedback on 50+ student submissions, improving code quality and reinforcing core full-stack development concepts.",
      ],
      techStack: ["React", "Node", "Express", "MongoDB", "Debugging"],
    },
    {
      company: "ThinkNeuro LLC",
      title: "Software Engineering Intern",
      subtitle: "REMOTE · EDTECH",
      date: "Jun. 2025 – Aug. 2025",
      isActive: false,
      description: [
        "Developed a B2B license dashboard using Streamlit and Python to track student enrollment, kit shipments, and engagement across partner institutions.",
        "Automated CSV data ingestion and cleaning pipelines with Pandas, replacing a manual workflow and automatically flagging inactive records and data quality issues.",
      ],
      techStack: ["Streamlit", "Pandas", "Python"],
    },
    {
      company: "Lambda Upsilon Lambda Fraternity, Inc.",
      title: "Chapter President",
      subtitle: "ITHACA, NY · STUDENT ORG",
      date: "Mar. 2025 – Present",
      isActive: true,
      description: [
        "Directed chapter strategy, operations, and recruitment for a 6-member chapter. Organized 15+ campus events and established partnerships with 7 student organizations, increasing chapter visibility and community engagement.",
      ],
      techStack: [],
    },
  ];

  const projects = [
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

  const isLight = theme === "light";

  const bg = isLight ? "bg-slate-50" : "bg-[#111111]";
  const sectionBg = isLight
    ? "bg-slate-50 text-slate-900"
    : "bg-[#111111] text-[#e2e2e2]";
  const heading = isLight ? "text-slate-900" : "text-[#f0f0f0]";
  const subText = isLight ? "text-slate-500" : "text-[#888888]";
  const bodyText = isLight ? "text-slate-700" : "text-[#c4c4c4]";
  const accent = isLight ? "text-[#0F4D92]" : "text-[#85b8f7]";
  const divider = isLight ? "border-slate-200" : "border-[#2a2a2a]";
  const expDivider = isLight ? "divide-slate-200" : "divide-[#2a2a2a]";
  const chipLabel = isLight
    ? "font-bold text-slate-700"
    : "font-bold text-[#c4c4c4]";

  const cardTitle = isLight ? "text-slate-900" : "text-[#f0f0f0]";
  const cardBody = isLight ? "text-slate-600" : "text-[#b0b0b0]";
  const cardDate = isLight ? "text-slate-400" : "text-[#666666]";
  const cardBtn = isLight
    ? "border-slate-300 text-slate-500 bg-white hover:border-slate-500 hover:text-slate-800"
    : "border-[#333333] text-[#999999] bg-[#1a1a1a] hover:border-[#555555] hover:text-[#e0e0e0]";

  const footerBg = isLight ? "bg-slate-100" : "bg-[#0d0d0d]";
  const footerText = isLight ? "text-slate-500" : "text-[#555555]";
  const footerLink = isLight
    ? "text-slate-600 hover:text-slate-900"
    : "text-[#888888] hover:text-[#cccccc]";
  const footerDivider = isLight ? "border-slate-300" : "border-[#2a2a2a]";

  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-colors ${isLight ? "bg-slate-50" : "bg-[#111111]"}`}
      >
        <nav
          aria-label="Main navigation"
          className={`flex items-center gap-1 px-3 py-2 rounded-2xl border shadow-sm transition-colors ${isLight ? "border-slate-200 bg-white" : "border-[#2a2a2a] bg-[#1a1a1a]"}`}
        >
          <a
            href="#about"
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${isLight ? "text-slate-500 hover:bg-slate-100" : "text-[#888888] hover:bg-[#252525] hover:text-[#e0e0e0]"}`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${isLight ? "text-slate-500 hover:bg-slate-100" : "text-[#888888] hover:bg-[#252525] hover:text-[#e0e0e0]"}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${isLight ? "text-slate-500 hover:bg-slate-100" : "text-[#888888] hover:bg-[#252525] hover:text-[#e0e0e0]"}`}
          >
            Projects
          </a>
          <a
            href="mailto:em882@cornell.edu"
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${isLight ? "text-slate-500 hover:bg-slate-100" : "text-[#888888] hover:bg-[#252525] hover:text-[#e0e0e0]"}`}
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="fixed top-6 right-4 z-50 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Switch to dark mode"
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${isLight ? "border-slate-200 bg-white text-slate-600 hover:bg-slate-100" : "border-[#2a2a2a] bg-[#1a1a1a] text-[#666666] opacity-50 hover:opacity-100"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Switch to light mode"
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${!isLight ? "border-[#2a2a2a] bg-[#1a1a1a] text-[#c4c4c4] hover:bg-[#252525]" : "border-slate-200 bg-white text-slate-400 opacity-50 hover:opacity-100"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </button>
      </div>

      <section
        id="about"
        className={`w-full pt-32 pb-20 px-8 transition-colors ${sectionBg}`}
      >
        <div className="sm:flex flex-col-reverse max-w-4xl mx-auto flex items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-lg">
            <h1
              className={`text-7xl font-bold leading-none tracking-tight ${heading}`}
            >
              Erik Mauricio
            </h1>
            <p className={`text-xl leading-relaxed ${bodyText}`}>
              I'm Erik Mauricio, a Computer Science junior at Cornell University
              minoring in Information Science with a concentration in
              Interactive Technologies. I like working in the intersection of AI, NLP,
              and full-stack engineering by building backend systems, retrieval
              pipelines, and LLM-integrated products that are technically
              rigorous and meaningfully useful. Outside of engineering, I serve
              as Corporate Chair for my SHPE chapter, and spend my time at the
              gym, watching Barcelona FC and El Tri, and listening to music.
              Currently seeking Summer 2027 internships in backend engineering,
              AI infrastructure, or NLP — open to other roles too.
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
      <section
        id="work"
        className={`w-full px-8 py-16 transition-colors ${sectionBg}`}
      >
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

      <div
        className={`flex flex-col flex-1 items-center justify-center font-sans transition-colors ${bg}`}
      >
        <main className="flex flex-1 w-full max-w-4xl flex-col gap-10 pt-12 pb-12 px-8 sm:items-start">
          {/* Projects */}
          <section id="projects">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className={`font-bold text-4xl ${heading}`}>
                What I've Built
              </h2>
            </div>
            <div className={`border-t mb-8 ${divider}`} />

            <div className="flex flex-wrap gap-4">
              {projects.map((project, i) => (
                <div key={i} className="w-full sm:w-[calc(50%-0.5rem)]">
                  <Card theme={theme}>
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className={`font-bold text-base ${cardTitle}`}>
                          {project.title}
                        </h3>
                        <span className={`text-xs ${cardDate}`}>
                          {project.date}
                        </span>
                      </div>
                      <p className={`text-base leading-relaxed ${cardBody}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, j) => (
                          <Chip
                            skill={tech}
                            variant="tech"
                            theme={theme}
                            key={j}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2 pt-1">
                        <button
                          className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}
                        >
                          Github
                        </button>
                        <button
                          className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}
                        >
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
                    <Chip
                      skill={lang}
                      variant="programming"
                      theme={theme}
                      key={i}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-2 ${chipLabel}`}>Frameworks & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((lang, i) => (
                    <Chip
                      skill={lang}
                      variant="framework"
                      theme={theme}
                      key={i}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className={`mb-2 ${chipLabel}`}>Tools and AI</p>
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
            <p className={`uppercase tracking-widest text-sm ${footerText}`}>
              Erik Mauricio
            </p>
            <div className={`w-12 border-t ${footerDivider}`} />
            <div className={`flex items-center gap-8 text-sm ${footerLink}`}>
              <a
                href="https://github.com/erik-mauricio"
                className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/erik-mauricio"
                className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
              >
                LinkedIn
              </a>
              <a
                href="mailto:em882@cornell.edu"
                className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                className="transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
              >
                Resume
              </a>
            </div>
            <p className={`text-sm ${footerText}`}>© 2026 Erik Mauricio</p>
          </div>
        </footer>
      </div>
    </>
  );
}
