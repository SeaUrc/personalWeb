import { headers } from "next/headers";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany();

  return (
    <main className="">
      <div className="flex"> 
        {images.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      lucas fasdfasdf
    </main>
  );
}
