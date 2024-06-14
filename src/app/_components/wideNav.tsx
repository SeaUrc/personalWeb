'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function WideNav() {

  const [activeSection, setActiveSection] = useState('about');
  const [hoverSection, setHoverSection] = useState('');
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'education'];
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

  return (
    <header className="sticky top-0 py-24 flex flex-col h-screen">
      <div className="flex-grow">
        <h1 className="text-5xl font-bold text-white">
          <a href="/">Nicholas Song</a>
        </h1>
        <h2 className="text-2xl font-bold text-white mt-3">
          Software Developer
        </h2>
        <p className="text-sm mt-4 w-[22rem]">High schooler who's interested in web development and machine learning</p>
        {/* Add additional header content here */}
        <nav className="">
          <ul className="mt-16 w-max flex flex-col items-start text-sm">
            <li
              className="py-2 relative left-8"
              onMouseEnter={() => setHoverSection("about")}
              onMouseLeave={() => setHoverSection("")}
            >
              <div
                className={`absolute -left-8 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'about' || hoverSection === "about") ? 'w-16' : 'w-8'
                  }`}
              ></div>
              <a
                onClick={() => handleNavClick('about')}
                className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'about' || hoverSection === "about") ? 'text-white ml-8' : 'text-gray-400'
                  }`}
              >
                About
              </a>
            </li>
            <li className="py-2 relative left-8"
              onMouseEnter={() => setHoverSection("projects")}
              onMouseLeave={() => setHoverSection("")}
            >
              <div
                className={`absolute -left-8 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'projects' || hoverSection === "projects") ? 'w-16' : 'w-8'
                  }`}
              ></div>
              <a
                onClick={() => handleNavClick('projects')}
                className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'projects' || hoverSection === "projects") ? 'text-white ml-8' : 'text-gray-400'
                  }`}
              >
                Projects
              </a>
            </li>
            <li className="py-2 relative left-8"
              onMouseEnter={() => setHoverSection('education')}
              onMouseLeave={() => setHoverSection("")}
            >
              <div
                className={`absolute -left-8 top-1/2 h-[2px] bg-white transition-all duration-300 ${(activeSection === 'education' || hoverSection === "education") ? 'w-16' : 'w-8'
                  }`}
              ></div>
              <a
                onClick={() => handleNavClick('education')}
                className={`group flex items-center pl-3 py-3 transition-all duration-300 ${(activeSection === 'education' || hoverSection === "education") ? 'text-white ml-8' : 'text-gray-400'
                  }`}
              >
                Education
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex w-72  justify-between mb-6">
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
                src="/icons8-linkedin.svg"
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
          <li className="w-1 bg-gray-400">
          </li>
          <li>
              <Link
                href="/lucas"
              >
                <Image
                  src="/dog.svg"
                  alt="My Dog"
                  width={24}
                  height={24}
                  className="w-8 h-8 opacity-70 transition-all duration-300 group-hover:opacity-100"
                />
              </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}