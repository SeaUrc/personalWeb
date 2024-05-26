import { headers } from "next/headers";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <main className="">
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
