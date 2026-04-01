"use client";
import Image from "next/image";
import { useState } from "react";
import Card from "./component-library/Card";
import Chip from "./component-library/Chip";
import ExperienceInfo from "./component-library/ExperienceInfo";

export default function Home() {
  const organizations = [
    "La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.",
    "SHPE",
    "Mexsa",
    "Cornell Tradition Fellowship",
    "Horatio Alger National Scholar",
    "Simon Scholar",
  ];

  const classes = [
    "OOP and Data Structures",
    "Full Stack Development",
    "Discrete Math",
    "AI Decisions Reasoning",
    "Language Retrieval",
  ];

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
    },
    {
      title: "Sports Team Finder",
      description:
        "Search engine that lets users discover sports teams through natural language queries powered by a custom TF-IDF and cosine similarity pipeline.",
      date: "Feb. 2025 – Present",
      techStack: ["Python", "Flask", "TF-IDF", "Cosine Similarity"],
      github: "https://github.com/erik-mauricio/sports-team-finder",
      live: "",
    },
  ];

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  return (
    <>
      <nav className="flex flex-row bg-blue-400 p-2 ">
        <menu className="hidden flex flex-col text-center md:flex-row">
          <a>Bio</a>

          <a>Skills</a>

          <a>Experience</a>

          <a>Projects</a>
        </menu>

        <button
          className="p-2 border-2 hover:bg-blue-600"
          aria-label="Menu"
          onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <rect y="4" width="24" height="2" rx="1" fill="#333" />
            <rect y="11" width="24" height="2" rx="1" fill="#333" />
            <rect y="18" width="24" height="2" rx="1" fill="#333" />
          </svg>
        </button>
      </nav>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col  py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-center">Hi, I'm Erik!</h1>

            <Image
              src="/images/headshot.jpg"
              alt="Erik's headshot image"
              width={300}
              height={300}
            />
          </div>
          <p className="">
            My name is Erik Mauricio, and I’m a rising sophomore at Cornell
            University studying Computer Science. I’m passionate about
            full-stack development and artificial intelligence, with a strong
            interest in building apps that make a positive impact on communities
            and help students succeed.
          </p>
          <Card>
            <p>Currently studying</p>

            <h3>B.A. Computer Science</h3>

            <h3>Cornell University * Expected Grad May 2028</h3>

            <p>
              Organizations I'm apart of:{" "}
              <div className="space-x-2">
                {organizations.map((orgName, index) => (
                  <Chip skill={orgName} variant="" key={index}></Chip>
                ))}{" "}
              </div>
            </p>

            <p>
              Classes I've taken:{" "}
              <div className="space-x-2">
              {classes.map((className, index) => (
                <Chip skill={className} variant="" key={index}></Chip>
              ))}{" "}
              </div>
            </p>
          </Card>

          <div>
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
          </div>

          <div>
            <h2 className="font-bold text-2xl">Projects</h2>
          </div>

          <section>
            <h2 className="font-bold text-2xl">Skills</h2>

            <div className="space-y-2">
              <h3>
                <div className="space-x-2">
                  Programming Languages:{" "}
                  {languages.map((lang, index) => (
                    <Chip skill={lang} variant="" key={index}></Chip>
                  ))}{" "}
                </div>
              </h3>

              <h3>
                Frameworks:{" "}
                <div className="space-x-2">
                  {technologies.map((lang, index) => (
                    <Chip skill={lang} variant="" key={index}></Chip>
                  ))}
                </div>
              </h3>

              <h3>
                <div className="space-x-2">
                  Developer Tools:{" "}
                  {tools.map((lang, index) => (
                    <Chip skill={lang} variant="" key={index}></Chip>
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
