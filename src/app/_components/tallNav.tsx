'use client';


import Image from "next/image";
import Link from "next/link";

export default function TallNav() {
    return (
      <header className="py-24 flex flex-col px-5">
        <div className="flex-grow">
          <h1 className="text-5xl font-bold text-white">
            <a href="/">Nicholas Song</a>
          </h1>
          <h2 className="text-2xl font-bold text-white mt-4">
            Software Developer
          </h2>
          <p className="text-sm mt-4 w-[22rem]">High schooler who's interested in web development and machine learning</p>
        </div>
        <ul className="flex w-72 justify-between mt-8">
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
                  className="w-[1.85rem] h-[1.85rem] opacity-70 transition-all duration-300 group-hover:opacity-100"
                />
              </Link>
          </li>
        </ul>
      </header>
    );
  }