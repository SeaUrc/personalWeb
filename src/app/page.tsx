'use client';
import WideNav from "~/app/_components/wideNav";
import TallNav from "~/app/_components/tallNav";
import About from "~/app/_components/about";
import Education from "./_components/education";
import Projects from "./_components/projects";

export default function HomePage() {
  return (
    <div>
      <div className="hidden aspect-ratio-wide:block">
        <div className="mx-auto max-w-6xl min-h-screen font-mono">
          <main className="flex">
            <div className="ml-5 w-1/2 bg-black">
              <WideNav />
            </div>
            <div className="w-1/2">
              <section id="about">
                <div className="width-full min-h-[45vh] py-24 px-5">
                  <About />
                </div>
              </section>
              <section id="projects">
                <div className="width-full py-24 -translate-y-10">
                  <Projects />
                </div>
              </section>
              <section id="education" className="-translate-y-24">
                <div className="width-full py-24 px-5">
                  <Education />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>


      <div className="hidden aspect-ratio-tall:block">
        <div className="mx-auto max-w-6xl min-h-screen font-mono">
          <main className="flex">
            <div className="w-full m-5">
              <TallNav />
              <section id="about">
                <div className="width-full px-5">
                  <p className="text-2xl font-bold text-white mb-4">
                    About
                  </p>
                  <About />
                </div>
              </section>
              <section id="projects">
                <p className="text-2xl font-bold text-white pt-24 mb-4 pl-5">
                  Projects
                </p>
                <div className="width-full">
                  <Projects />
                </div>
              </section>
              <section id="education">
                <p className="pl-5 mb-4 pt-12 text-2xl font-bold text-white">
                  Education
                </p>
                <div className="width-full px-5">
                  <Education />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}