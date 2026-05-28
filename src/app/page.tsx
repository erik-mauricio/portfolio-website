"use client";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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

  const tools = [
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "REST APIs",
    "OpenAI API",
    "Claude Code",
    "RAG",
    "TF-IDF",
    "Word2Vec",
  ];

  const experiences = [
    {
      company: "Cornell Hack4Impact",
      title: "Software Developer",
      subtitle: "ITHACA, NY",
      date: "Aug. 2025 – Present",
      isActive: true,
      description: [
        "Developed REST API endpoints for restaurants, Community-Based Organizations (CBOs), and meal-provider relationships, joining data across 3 relational database tables to power dynamic sidebar and popup components for 204 partner organizations.",
        "Integrated Mapbox and Geocoding APIs to convert street addresses to coordinates, rendering color-coded markers for 135 CBOs and 69 restaurants across 5 NYC boroughs serving 30,000 meals/week.",
        "Designed interactive CBO-Restaurant relationship visualization using Deck.gl, rendering curved arrows to trace meal supply chains and a priority-ordered tag system highlighting underserved communities by poverty threshold.",
      ],
      techStack: ["Next.js", "Mapbox GL", "PostgreSQL"],
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
      techStack: ["React", "Node", "Express", "MongoDB", "Debugging", "Teaching"],
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
      company: "SHPE",
      title: "Corporate Chair",
      subtitle: "ITHACA, NY · STUDENT ORG",
      date: "May 2026 – Present",
      isActive: true,
      description: [
        `Manage Cornell SHPE’s corporate sponsorship pipeline by coordinating outreach, 
        maintaining relationships with 20+ companies, and tracking sponsorship commitments 
        for the 2026–2027 academic year. `,
        `Coordinate professional development and corporate engagement initiatives, including 
        networking events, information sessions, and recruiting programs for ~30+ members`,
        `Oversee corporate communications and operational workflows by organizing sponsorship
        records and invoices, responding to partners within 24 hours, and promoting career opportunities 
        through member communication channels.`,
      ],
      techStack: [],
    },
  ];

  const projects = [
    {
      title: "Sports Team Finder",
      description:
        "Search engine that lets users discover sports teams through natural language queries powered by a custom TF-IDF and cosine similarity pipeline.",
      date: "Feb. 2025 – Present",
      techStack: ["Python", "Flask", "TF-IDF", "Cosine Similarity"],
      github: "https://github.com/moonlightplague/4300-Sports-Team-Finder",
      live: "https://sports-team-finder.4300showcase.infosci.cornell.edu/",
      imageURI: "/images/sportsteamfinder.png",
    },
    {
      title: "LeetCode Agent",
      description: `A CLI tool that uses Claude&apos;s API to log your LeetCode attempts, 
        identify weak topics, and recommend what to practice next.`,
      date: "June 2025 – Aug. 2025",
      techStack: ["Python", "Claude API"],
      github: "https://github.com/erik-mauricio/leetcode-agent",
      live: "",
      imageURI: "/images/leetcode-agent.png",
    },
    {
      title: "Rethink Food",
      description: `Full-stack interactive map platform visualizing NYC meal supply chains across 
      204 partner organizations, serving 30,000 meals weekly across all five boroughs.`,
      date: "June 2025 – Aug. 2025",
      techStack: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Socket.io",
      ],
      github: "https://github.com/cornellh4i/Rethink-Food",
      live: "https://www.rethinkfood.org/",
      imageURI: "/images/rethink.png",
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
      imageURI: "/images/tiemposperfectos.png",
    },
    {
      title: "Pelvic Health Association",
      description: `A centralized web platform serving as PPAC's digital hub for pelvic pain resources, 
        provider directories, educational content, and community events for Cornell. `,
      date: "June 2025 – Aug. 2025",
      techStack: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Socket.io",
      ],
      github: "https://github.com/cornellh4i/PPAC",
      live: "",
      imageURI: "/images/ppac.png",
    },
  ];

  const isLight = theme === "light";

  const bg = isLight ? "bg-slate-50 text-slate-900" : "bg-[#111111] text-[#e2e2e2]";
  const heading = isLight ? "text-slate-900" : "text-[#f0f0f0]";
  const subText = isLight ? "text-slate-500" : "text-[#888888]";
  const bodyText = isLight ? "text-slate-700" : "text-[#c4c4c4]";
  const divider = isLight ? "border-slate-200" : "border-[#2a2a2a]";
  const chipLabel = isLight ? "font-bold text-slate-700" : "font-bold text-[#c4c4c4]";
  const cardBtn = isLight
    ? "border-slate-300 text-slate-500 bg-white hover:border-slate-500 hover:text-slate-800"
    : "border-[#333333] text-[#999999] bg-[#1a1a1a] hover:border-[#555555] hover:text-[#e0e0e0]";
  const navLink = isLight
    ? "text-slate-500 hover:bg-slate-100"
    : "text-[#888888] hover:bg-[#252525] hover:text-[#e0e0e0]";
  const navBar = isLight
    ? "border-slate-200 bg-white"
    : "border-[#2a2a2a] bg-[#1a1a1a]";

  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-colors ${isLight ? "bg-slate-50" : "bg-[#111111]"}`}
      >
        <nav
          aria-label="Main navigation"
          className={`flex items-center gap-1 px-3 py-2 rounded-2xl border shadow-sm transition-colors ${navBar}`}
        >
          {["About", "Skills", "Projects", "Experience"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${navLink}`}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:em882@cornell.edu"
            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${navLink}`}
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
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
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
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>

      <section
        id="about"
        className={`w-full pt-32 pb-16 px-8 transition-colors ${bg}`}
      >
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto items-center justify-between gap-12">
          <div className="order-3 lg:order-1 flex flex-col gap-6 max-w-lg text-center lg:text-left">
            <h1
              className={`text-7xl font-bold leading-none tracking-tight ${heading}`}
            >
              Erik Mauricio
            </h1>
            <p className={`text-lg leading-relaxed ${bodyText}`}>
              I&apos;m Erik Mauricio, a Computer Science junior at Cornell
              University minoring in Information Science with a concentration in
              Interactive Technologies. I like working in the intersection of
              AI, NLP, and full-stack engineering by building backend systems,
              retrieval pipelines, and LLM-integrated products. Outside of
              engineering, I serve as Corporate Chair for my SHPE chapter, and
              spend my time at the gym, watching Barcelona FC and El Tri, and
              listening to music. Currently, I&apos;m seeking a Summer 2027 internship in
              software engineering.
            </p>
          </div>

          <div className="order-1 lg:order-2 shrink-0 flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-2xl ring-4 ring-[#0F4D92]">
              <Image
                src="/images/headshot.jpg"
                alt="Erik Mauricio"
                width={280}
                height={280}
                className="rounded-2xl object-cover w-64 h-64 transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="order-2 flex items-center gap-5">
              <a
                href="mailto:em882@cornell.edu"
                aria-label="Email Erik Mauricio"
                className={`text-4xl transition-colors ${isLight ? "text-slate-600 hover:text-slate-900" : "text-[#a8a8a8] hover:text-[#f0f0f0]"}`}
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/erik-mauricio"
                target="_blank"
                rel="noreferrer"
                aria-label="Erik Mauricio GitHub"
                className={`text-4xl transition-colors ${isLight ? "text-slate-600 hover:text-slate-900" : "text-[#a8a8a8] hover:text-[#f0f0f0]"}`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/erikmauricio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Erik Mauricio LinkedIn"
                className={`text-4xl transition-colors ${isLight ? "text-slate-600 hover:text-slate-900" : "text-[#a8a8a8] hover:text-[#f0f0f0]"}`}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className={`w-full px-8 py-16 transition-colors ${bg}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-bold text-4xl mb-2 ${heading}`}>
            What I&apos;ve done
          </h2>
          <div className={`border-t mb-8 ${divider}`} />
          <div
            className={`divide-y ${isLight ? "divide-slate-200" : "divide-[#2a2a2a]"}`}
          >
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

      <main className={`w-full font-sans transition-colors ${bg}`}>
        <section id="projects" className="w-full px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className={`font-bold text-4xl mb-2 ${heading}`}>
              What I&apos;ve Built
            </h2>
            <div className={`border-t mb-8 ${divider}`} />
            <div className="flex flex-wrap gap-4">
              {projects.map((project, i) => (
                <div key={i} className="w-full lg:w-[calc(50%-0.5rem)] flex">
                  <Card theme={theme} className="flex-1">
                    <div className="flex h-full flex-col gap-3">
                      <div
                        className={`overflow-hidden rounded-lg border ${isLight ? "border-slate-200 bg-slate-100" : "border-[#2a2a2a] bg-[#141414]"}`}
                      >
                        <Image
                          src={project.imageURI}
                          alt={`${project.title} preview`}
                          width={1200}
                          height={630}
                          className="h-56 w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className={`font-bold text-base ${heading}`}>
                          {project.title}
                        </h3>
                      </div>
                      <p className={`text-base leading-relaxed ${bodyText}`}>
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
                      <div className="mt-auto flex gap-2 pt-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}
                        >
                          Github
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors ${cardBtn}`}
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="w-full px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className={`font-bold text-4xl mb-2 ${heading}`}>What I use</h2>
            <div className={`border-t mb-8 ${divider}`} />
            <div className="space-y-5">
              {[
                {
                  label: "Programming Languages",
                  items: languages,
                  variant: "programming" as const,
                },
                {
                  label: "Frameworks & Libraries",
                  items: technologies,
                  variant: "framework" as const,
                },
                {
                  label: "Tools and AI",
                  items: tools,
                  variant: "tool" as const,
                },
              ].map(({ label, items, variant }) => (
                <div key={label}>
                  <p className={`mb-2 ${chipLabel}`}>{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <Chip
                        skill={item}
                        variant={variant}
                        theme={theme}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          className={`w-full py-16 px-8 transition-colors ${isLight ? "bg-slate-100" : "bg-[#0d0d0d]"}`}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <p className={`uppercase tracking-widest text-sm ${subText}`}>
              Erik Mauricio
            </p>
            <div className={`w-12 border-t ${divider}`} />
            <div
              className={`flex items-center gap-8 text-sm ${isLight ? "text-slate-600 hover:text-slate-900" : "text-[#888888]"}`}
            >
              {[
                { label: "GitHub", href: "https://github.com/erik-mauricio" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/erikmauricio/",
                },
                { label: "Email", href: "mailto:em882@cornell.edu" },
                { label: "Resume", href: "/Erik_Mauricio_Resume.pdf" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded ${isLight ? "hover:text-slate-900" : "hover:text-[#cccccc]"}`}
                >
                  {label}
                </a>
              ))}
            </div>
            <p className={`text-sm ${subText}`}>© 2026 Erik Mauricio</p>
          </div>
        </footer>
      </main>
    </>
  );
}
