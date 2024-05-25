import Link from "next/link";
import { db } from "~/server/db";

const images = [
  "https://utfs.io/f/fd7526e3-174b-407b-a802-7cfdf1f5b0df-nm33wo.jpeg",
];

const profilePic = images.map((url, index) => ({
  id: index+1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex"> 
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 p-2">
            {post.name}
          </div>
        ))}
        {profilePic.map((profilePic) => (
          <div key={profilePic.id} className="w-1/2 p-2">
            <img src={profilePic.url} />
          </div>
        ))}
      </div>
      lucas the dawg
    </main>
  );
}
