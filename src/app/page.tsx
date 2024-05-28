'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import SideBar from "./_components/navbar";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-7xl min-h-screen">
      <main className="flex">
        <div className="w-1/2 bg-black border-4 border-gray-200">
          <header className="sticky top-0 py-24">
            <h1 className="text-6xl font-bold text-white">
              <a href="/">Nicholas Song</a>
            </h1>
            <h2 className="text-3xl font-bold text-white mt-3">
              Software Developer
            </h2>
            <p className="mt-4">
              blah blah blah
            </p>
            {/* Add additional header content here */}
            <nav className="">
              <ul className="mt-16 w-max flex flex-col items-end">
                <li className="py-2">
                  <a
                    href="#about"
                    onClick={() => handleNavClick('about')}
                    className="text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#projects"
                    onClick={() => handleNavClick('projects')}
                    className="text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#contact"
                    onClick={() => handleNavClick('contact')}
                    className="text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="w-1/2 py-24">
          <section id="about">
            <div className="width-full min-h-[150vh]"></div>
          </section>
          <section id="projects">
            <div className="width-full min-h-[150vh] bg-white"></div>
          </section>
          <section id="contact">
            <div className="width-full min-h-[150vh]"></div>
          </section>
        </div>
      </main>
    </div>

  );
}
