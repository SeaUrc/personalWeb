import { headers } from "next/headers";
import { db } from "~/server/db";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages()
  return(
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
      <div>
        <SignedOut><SignInButton /></SignedOut>
        <SignedIn><UserButton /></SignedIn>
      </div>
      <Images />
      lucas fasdfasdf
    </main>
  );
}
