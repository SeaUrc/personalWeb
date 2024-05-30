'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import SideBar from "./_components/navbar";
import { useEffect, useState } from 'react';

export const dynamic = "force-dynamic";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 100; // Adjust the offset as needed
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
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
            <p className="mt-4">blah blah blah</p>
            {/* Add additional header content here */}
            <nav className="">
              <ul className="mt-16 w-max flex flex-col items-start">
                <li className="py-2 relative left-6">
                  <div
                    className={`absolute -left-6 top-1/2 h-1 w-6 bg-white transition-all duration-300 ${
                      activeSection === 'about' ? 'w-6' : 'w-10'
                    }`}
                  ></div>
                  <a
                    onClick={() => handleNavClick('about')}
                    className={`group flex items-center pl-3 py-3 transition-colors duration-300 ${
                      activeSection === 'about' ? 'text-white font-bold' : 'text-gray-400'
                    }`}
                  >
                    About
                  </a>
                </li>
                <li className="py-2 relative left-6">
                  <div
                    className={`absolute -left-6 top-1/2 h-1 w-6 bg-white transition-all duration-300 ${
                      activeSection === 'projects' ? 'w-6' : 'w-10'
                    }`}
                  ></div>
                  <a
                    onClick={() => handleNavClick('projects')}
                    className={`group flex items-center pl-3 py-3 transition-colors duration-300 ${
                      activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-400'
                    }`}
                  >
                    Projects
                  </a>
                </li>
                <li className="py-2 relative left-6">
                  <div
                    className={`absolute -left-6 top-1/2 h-1 w-6 bg-white transition-all duration-300 ${
                      activeSection === 'contact' ? 'w-6' : 'w-10'
                    }`}
                  ></div>
                  <a
                    onClick={() => handleNavClick('contact')}
                    className={`group flex items-center pl-3 py-3 transition-colors duration-300 ${
                      activeSection === 'contact' ? 'text-white font-bold' : 'text-gray-400'
                    }`}
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