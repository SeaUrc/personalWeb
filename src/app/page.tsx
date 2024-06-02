'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";

import Nav from "~/app/_components/nav";
import About from "~/app/_components/about";
import Education from "./_components/education";
import Projects from "./_components/projects";
import { useRouter } from "next/navigation";
import BoidBackground from "./_components/BoidBackground";

export const dynamic = "force-dynamic";

export default function HomePage() {
  // const router = useRouter();
  // const [isFlipping, setIsFlipping] = useState(false);
  // const triggerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         console.log("entry", entry?.isIntersecting)
  //         if (entry?.isIntersecting && !isFlipping) {
  //           setIsFlipping(true);
  //           router.push("/back");
  //         }
  //       },
  //       { threshold: 0.5 }
  //   );

  //   if (triggerRef.current) {
  //     observer.observe(triggerRef.current);
  //   }

  //   return () => {
  //     if (triggerRef.current) {
  //       observer.unobserve(triggerRef.current);
  //     }
  //   };
  // }, [isFlipping, router])

  return (
    <div>
      <BoidBackground/>
      <div className="mx-auto max-w-7xl min-h-screen font-mono">
        <main className="flex">
          <div className="w-1/2">
            <Nav />
          </div>
          <div className="w-1/2">
            <section id="about">
              <div className="width-full min-h-[45vh] py-24 px-5">
                <About />
              </div>
            </section>
            <section id="projects">
              <div className="width-full py-24">
                <Projects />
              </div>
            </section>
            <section id="education">
              <div className="width-full py-24 px-5">
                <Education />
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* <div ref={triggerRef} className="text-center text-white w-full">
        Scroll to flip
      </div> */}
    </div>
  );
}