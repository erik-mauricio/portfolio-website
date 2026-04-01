"use client";
import Image from "next/image";
import { useState } from "react";
import Card from "./component-library/Card";
import Chip from "./component-library/Chip";

export default function Home() {
  const organizations = [
    "La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc.",
    "SHPE",
    "Mexsa",
    "Cornell Tradition Fellowship",
    "Horatio Alger National Scholar",
    "Simon Scholar"
  ];

  const classes = ["OOP and Data Structures",
    "Full Stack Development",
    "Discrete Math",
    "AI Decisions Reasoning",
    "Language Retrieval"
  ] 


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
              {organizations.map((orgName, index) => (
                <Chip skill={orgName} variant="" key={index}></Chip>
              ))}{" "}
            </p>

            <p>
              Classes I've taken:{" "}
              {classes.map((className, index) => (
                <Chip skill={className} variant="" key={index}></Chip>
              ))}{" "}
            </p>
          </Card>

          <div>
            <h2 className="font-bold text-2xl">Skills</h2>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Experience and Leadership</h2>

            <div className="flex flex-col">
              <div className="flex flex-row justify-evenly">
                <h3 className="">Software Engineering Inter</h3>

                <h3>Jan 2024</h3>
              </div>

              <h3 className="">Company * Loc</h3>

              <p>description</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl">Projects</h2>
          </div>
          <footer>
            <p>Developed by Erik Mauricio</p>
            <p>Last updated: April 2026</p>
          </footer>
        </main>
      </div>
    </>
  );
}
