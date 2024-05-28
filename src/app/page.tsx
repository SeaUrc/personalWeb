import { headers } from "next/headers";
import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { getMyImages } from "~/server/queries";
import SideBar from "./_components/navbar";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-64">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  headers();

  return (
    <main className="">
      <SideBar />
      <div className="ml-64">
        <section id="about">
          <Images />
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
  );
}
