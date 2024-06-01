'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react';
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('about');
  const [hoverSection, setHoverSection] = useState('');

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

  const handleNavClick = (sectionId: string) => {
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
    <div className="mx-auto max-w-7xl min-h-screen font-mono">
      <main className="flex">
        <div className="w-1/2 bg-black">
          <header className="sticky top-0 py-24 flex flex-col h-screen">
            <div className="flex-grow">
              <h1 className="text-6xl font-bold text-white">
                <a href="/">Nicholas Song</a>
              </h1>
              <h2 className="text-3xl font-bold text-white mt-3">
                Software Developer
              </h2>
              <p className="mt-4">Student at Northville High School whos interested in web development and machine learning</p>
              {/* Add additional header content here */}
              <nav className="">
                <ul className="mt-16 w-max flex flex-col items-start">
                  <li
                    className="py-2 relative left-6"
                    onMouseEnter={() => setHoverSection("about")}
                    onMouseLeave={() => setHoverSection("")}
                  >
                    <div
                      className={`absolute -left-6 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'about' || hoverSection === "about") ? 'w-12' : 'w-6'
                        }`}
                    ></div>
                    <a
                      onClick={() => handleNavClick('about')}
                      className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'about' || hoverSection === "about") ? 'text-white ml-6' : 'text-gray-400'
                        }`}
                    >
                      About
                    </a>
                  </li>
                  <li className="py-2 relative left-6"
                    onMouseEnter={() => setHoverSection("projects")}
                    onMouseLeave={() => setHoverSection("")}
                  >
                    <div
                      className={`absolute -left-6 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'projects' || hoverSection === "projects") ? 'w-12' : 'w-6'
                        }`}
                    ></div>
                    <a
                      onClick={() => handleNavClick('projects')}
                      className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'projects' || hoverSection === "projects") ? 'text-white ml-6' : 'text-gray-400'
                        }`}
                    >
                      Projects
                    </a>
                  </li>
                  <li className="py-2 relative left-6"
                    onMouseEnter={() => setHoverSection("contact")}
                    onMouseLeave={() => setHoverSection("")}
                  >
                    <div
                      className={`absolute -left-6 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'contact' || hoverSection === "contact") ? 'w-12' : 'w-6'
                        }`}
                    ></div>
                    <a
                      onClick={() => handleNavClick('contact')}
                      className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'contact' || hoverSection === "contact") ? 'text-white ml-6' : 'text-gray-400'
                        }`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="flex w-48 justify-between mb-6">
              <li>
                <a href="https://github.com/SeaUrc" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-colors duration-300">
                  <Image
                    src="/github-mark-white.svg"
                    alt="GitHub Logo"
                    width={24}
                    height={24}
                    className="w-8 h-8 opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nicholas-song-1601251b1/" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-colors duration-300">
                  <Image
                    src="/In-White-128.png"
                    alt="LinkedIn Logo"
                    width={24}
                    height={24}
                    className="w-8 h-8 opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:nicksong03@gmail.com" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-colors duration-300">
                  <Image
                    src="/Gmail_Logo_White.svg"
                    alt="Instagram Logo"
                    width={24}
                    height={24}
                    className="w-8 h-8 opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
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