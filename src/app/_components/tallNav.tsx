'use client';
import Image from "next/image";

export default function TallNav() {
    return (
      <header className="py-24 flex flex-col px-5">
        <div className="flex-grow">
          <h1 className="text-6xl font-bold text-white">
            <a href="/">Nicholas Song</a>
          </h1>
          <h2 className="text-3xl font-bold text-white mt-4">
            Software Developer
          </h2>
          <p className="mt-4 w-[22rem]">High schooler who's interested in web development and machine learning</p>
        </div>
        <ul className="flex w-48 justify-between mt-8">
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
    );
  }