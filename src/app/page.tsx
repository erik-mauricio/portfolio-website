"use client";
import Image from "next/image";
import { useState } from "react";

import Card from "./component-library/Card";
import Chip from "./component-library/Chip";
import ExperienceInfo from "./component-library/ExperienceInfo";
import Reveal from "./component-library/Reveal";
import { useTheme } from "./context/ThemeContext";
import { profileLinks } from "./data/profile";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "oxford";

  const languages = [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MSSQL",
    "MongoDB",
    "HTML/CSS",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Express.js",
    "Flask",
    "PyTest",
    "NumPy",
    "Tailwind CSS",
  ];

  const tools = [
    "Git",
    "Docker",
    "AWS",
    "REST APIs",
    "WebSockets",
    "RAG",
    "Claude Code",
    "OpenAI API",
  ];

  const experiences = [
    {
      company: "County of Orange",
      title: "Data Engineer Intern",
      subtitle: "Santa Ana, CA",
      date: "May 2026 – Aug. 2026",
      isActive: false,
      description: [
        "Built a full-stack Next.js data intake app with SSO, eliminating 60+ hours of annual Excel cleanup across 100 performance measures, and designed a normalized MSSQL database powering a real-time Power BI dashboard for 3M residents.",
      ],
      techStack: ["Next.js", "MSSQL", "Power BI"],
    },
    {
      company: "Cornell Hack4Impact",
      title: "Software Developer",
      subtitle: "ITHACA, NY",
      date: "Aug. 2025 – Present",
      isActive: true,
      description: [
        "Build full-stack features for Rethink Food's nonprofit platform, including Next.js map components and Mapbox-powered views for 204 partner organizations, plus a Deck.gl visualization modeling food distribution serving 30K meals weekly.",
      ],
      techStack: ["Next.js", "Mapbox GL", "Deck.gl"],
    },
    {
      company: "Cornell University",
      title: "Web Development Undergraduate Teaching Assistant",
      subtitle: "INFO 2300 · FULL-STACK DEV",
      date: "Aug. 2025 – Present",
      isActive: true,
      description: [
        "Lead weekly labs and office hours across 3 terms for 40+ students, supporting full-stack development exercises and projects.",
      ],
      techStack: ["React", "Node", "Express", "MongoDB"],
    },
    {
      company: "SHPE",
      title: "Corporate Chair",
      subtitle: "ITHACA, NY · STUDENT ORG",
      date: "May 2026 – Present",
      isActive: true,
      description: [
        "Secured 4 corporate sponsorships and planned 3 recruiting and professional development events through outreach to 80+ companies.",
      ],
      techStack: [],
    },
  ];

  const projects = [
    {
      title: "Sports Discovery Engine",
      description:
        "Full-stack sports discovery engine that interprets natural-language queries through a hybrid BM25/SVD/RAG pipeline, beating the strongest lexical baseline by 24.6% higher NDCG@10.",
      date: "Feb. 2025 – Present",
      techStack: [
        "Next.js",
        "TypeScript",
        "Python",
        "PyTest",
        "BM25",
        "SVD/LSA",
        "RAG",
      ],
      github: "https://github.com/moonlightplague/4300-Sports-Team-Finder",
      live: "https://sports-team-finder.4300showcase.infosci.cornell.edu/",
      imageURI: "/images/sportsteamfinder.png",
    },
    {
      title: "LeetCode Agent",
      description:
        "CLI tool powered by the Claude API that logs LeetCode attempts, identifies weak topics, and recommends what to practice next.",
      date: "June 2025 – Aug. 2025",
      techStack: ["Python", "Claude API"],
      github: "https://github.com/erik-mauricio/leetcode-agent",
      live: "",
      imageURI: "/images/leetcode-agent.png",
    },
    {
      title: "Rethink Food",
      description:
        "Full-stack interactive map platform visualizing NYC meal supply chains across 204 partner organizations, serving 30,000 meals weekly across all five boroughs.",
      date: "June 2025 – Aug. 2025",
      techStack: [
        "Next.js",
        "PostgreSQL",
        "SupaBase",
        "Tailwind CSS",
        "Mapbox GL",
      ],
      github: "https://github.com/cornellh4i/Rethink-Food",
      live: "https://www.rethinkfood.org/",
      imageURI: "/images/rethink.png",
    },
    {
      title: "Tiempos Perfectos",
      description:
        "Full-stack adaptive English-learning app that models learner mastery with Bayesian Knowledge Tracing and adapts real-time AI speaking practice via FastAPI WebSockets.",
      date: "June 2025 – Aug. 2025",
      techStack: [
        "React",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
      ],
      github: "https://github.com/erik-mauricio/tiempos-perfectos",
      live: "",
      imageURI: "/images/tiemposperfectos.png",
    },
    {
      title: "Pelvic Health Association",
      description:
        "Centralized web platform serving as PPAC's digital hub for pelvic pain resources, provider directories, educational content, and community events at Cornell.",
      date: "June 2025 – Aug. 2025",
      techStack: ["React", "MongoDB", "Express.js", "Node.js", "SCSS"],
      github: "https://github.com/cornellh4i/PPAC",
      live: "",
      imageURI: "/images/ppac.png",
    },
  ];

  const navLinks = ["About", "Skills", "Projects", "Experience"];

  return (
    <>
      <div className="sticky top-0 z-50 hidden md:flex w-full justify-center bg-base-100/90 px-4 py-3 backdrop-blur transition-colors">
        <div className="navbar w-auto rounded-full border border-base-300 bg-base-200 px-3 py-1">
          <div className="navbar-center">
            <ul className="menu menu-horizontal gap-1">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="rounded-xl text-sm font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end ml-2">
            <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <svg
                className="swap-on size-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 100 2h1a1 1 0 001-1zm8-9a1 1 0 00-1 1v1a1 1 0 102 0V4a1 1 0 00-1-1zm7.66 2.34a1 1 0 00-1.41 0l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 000-1.41zM17 5.64a1 1 0 00.71-.29l.71-.71a1 1 0 10-1.41-1.41l-.71.71A1 1 0 0017 5.64zM12 6a6 6 0 100 12 6 6 0 000-12zm9 5h-1a1 1 0 100 2h1a1 1 0 100-2zm-3.36 6.36a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zM12 18a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
              </svg>
              <svg
                className="swap-off size-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.7-3.4 1 1 0 00-1.31-1.31 10.14 10.14 0 108.73 18.3 10.1 10.1 0 005.5-5.1 1 1 0 00-.06-.98z" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 md:hidden navbar bg-base-100 border-b border-base-300 transition-colors">
        <div className="navbar-start">
          <span className="font-display text-base font-semibold tracking-tight text-base-content">
            Erik Mauricio
          </span>
        </div>
        <div className="navbar-end gap-1">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleTheme}
              aria-label="Toggle theme"
            />
            <svg
              className="swap-on size-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 100 2h1a1 1 0 001-1zm8-9a1 1 0 00-1 1v1a1 1 0 102 0V4a1 1 0 00-1-1zm7.66 2.34a1 1 0 00-1.41 0l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 000-1.41zM17 5.64a1 1 0 00.71-.29l.71-.71a1 1 0 10-1.41-1.41l-.71.71A1 1 0 0017 5.64zM12 6a6 6 0 100 12 6 6 0 000-12zm9 5h-1a1 1 0 100 2h1a1 1 0 100-2zm-3.36 6.36a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zM12 18a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" />
            </svg>
            <svg
              className="swap-off size-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.7-3.4 1 1 0 00-1.31-1.31 10.14 10.14 0 108.73 18.3 10.1 10.1 0 005.5-5.1 1 1 0 00-.06-.98z" />
            </svg>
          </label>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="btn btn-ghost btn-circle"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="menu md:hidden sticky top-16 z-40 w-full border-b border-base-300 bg-base-100">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="min-h-16 text-base"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <section
        id="about"
        className="w-full bg-base-100 px-4 pb-16 pt-24 transition-colors sm:px-8 md:pt-28"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <div className="avatar">
            <div className="w-28 rounded-full ring-2 ring-base-300 ring-offset-4 ring-offset-base-100 sm:w-32">
              <Image
                src="/images/headshot.jpg"
                alt="Erik Mauricio"
                width={256}
                height={256}
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
              Hii, I&apos;m Erik!!!
            </h1>
          </div>
          <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">
            I&apos;m a Computer Science junior at Cornell University minoring in
            Information Science with a concentration in Interactive
            Technologies. I like working in the intersection of AI, NLP, and
            full-stack engineering by building backend systems, retrieval
            pipelines, and LLM-integrated products. Outside of engineering, I
            serve as Corporate Chair for my SHPE chapter, go to the gym, watch
            FC Barcelona, and listen to Drake. Currently, I&apos;m seeking a
            Winter/Summer 2027 internship in software engineering.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {profileLinks.map(
              ({ label, accessibleLabel, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={accessibleLabel}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="link link-hover flex items-center gap-1.5 text-sm text-base-content/70"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="w-full bg-base-100 px-8 py-16 transition-colors"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl mb-2 text-base-content">
            What I&apos;ve done
          </h2>
          <div className="w-12 h-1 rounded-full bg-primary mb-8" />
          <div className="divide-y divide-base-300">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={Math.min(i, 3) * 75}>
                <ExperienceInfo
                  company={exp.company}
                  title={exp.title}
                  subtitle={exp.subtitle}
                  description={exp.description}
                  date={exp.date}
                  isActive={exp.isActive}
                  techStack={exp.techStack}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <main className="w-full bg-base-100 font-sans transition-colors">
        <section id="projects" className="w-full px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl mb-2 text-base-content">
              What I&apos;ve Built
            </h2>
            <div className="w-12 h-1 rounded-full bg-primary mb-8" />
            <div className="flex flex-wrap gap-4">
              {projects.map((project, i) => (
                <Reveal
                  key={i}
                  delay={(i % 2) * 100}
                  className="w-full lg:w-[calc(50%-0.5rem)] flex"
                >
                  <Card className="flex-1">
                    <div className="flex h-full flex-col">
                      <div className="relative aspect-video w-full bg-base-200">
                        <Image
                          src={project.imageURI}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6">
                        <h3 className="card-title font-display text-base text-base-content">
                          {project.title}
                        </h3>
                        <p className="text-base leading-relaxed text-base-content/80">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech, j) => (
                            <Chip skill={tech} key={j} />
                          ))}
                        </div>
                        <div className="card-actions mt-auto pt-1">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline btn-sm"
                          >
                            Github
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="w-full px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl mb-2 text-base-content">
              What I use
            </h2>
            <div className="w-12 h-1 rounded-full bg-primary mb-8" />
            <div className="space-y-5">
              {[
                { label: "Programming Languages", items: languages },
                { label: "Frameworks & Libraries", items: technologies },
                { label: "Tools and AI", items: tools },
              ].map(({ label, items }) => (
                <div key={label}>
                  <p className="mb-2 font-bold text-base-content/80">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <Chip skill={item} key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer footer-center w-full bg-base-200 px-8 py-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <p className="uppercase tracking-widest text-sm text-base-content/60">
              Erik Mauricio
            </p>
            <div className="w-12 border-t border-base-300" />
            <nav className="flex items-center gap-8 text-sm text-base-content/70">
              {[
                { label: "GitHub", href: "https://github.com/erik-mauricio" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/erikmauricio/",
                },
                { label: "Email", href: "mailto:em882@cornell.edu" },
                { label: "Resume", href: "/images/Erik_Mauricio_Resume.pdf" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="link link-hover min-h-11 flex items-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
                >
                  {label}
                </a>
              ))}
            </nav>
            <p className="text-sm text-base-content/60">© 2026 Erik Mauricio</p>
          </div>
        </footer>
      </main>
    </>
  );
}
