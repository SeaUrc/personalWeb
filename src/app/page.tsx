'use client';
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react';
import Image from "next/image";

import Nav from "~/app/_components/nav";
import About from "~/app/_components/about";
import Education from "./_components/education";
import Projects from "./_components/projects";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen font-mono">
      <main className="flex">
        <div className="w-1/2 bg-black">
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
              <Education/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}