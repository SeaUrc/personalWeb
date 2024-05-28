'use client'
import Link from "next/link";
// import GithubIcon from "../../../public/github-mark.svg";
import Image from "next/image";

export default function SideBar() {
    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            throw Error("no section found!");
        }
    }
    return (
        <div className="bg-black text-white">
            <div
                className={"flex justify-center translate-x-0 fixed inset-y-0 bg-gray-900"}
            >
                <div className="px-4 py-6">
                    <div className="flex flex-row items-center mb-8">
                        <Link className="flex m-4"href="/">
                            <h1 className="text-5xl font-bold">Nicholas Song</h1>
                        </Link>
                        <a href="https://github.com/SeaUrc" target="_blank">
                            <Image
                                src="/github-mark-white.svg"
                                alt="GitHub Logo"
                                width={24}
                                height={24}
                                className="flex w-8 h-8 m-4"
                            />
                        </a>
                        
                    </div>
                    <nav className="text-2xl">
                        <ul>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="block py-2 px-4 rounded-md hover:bg-gray-700 w-full text-left"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="block py-2 px-4 rounded-md hover:bg-gray-700 w-full text-left"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="block py-2 px-4 rounded-md hover:bg-gray-700 w-full text-left"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}