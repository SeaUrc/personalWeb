'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react';

// use inter family font

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