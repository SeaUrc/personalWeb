import { headers } from "next/headers";
import { db } from "~/server/db";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Sign } from "crypto";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main className="">
      <div>
        <SignedOut><SignInButton /></SignedOut>
        <SignedIn><UserButton /></SignedIn>
      </div>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col w-64">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      lucas fasdfasdf
    </main>
  );
}
