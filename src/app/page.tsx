import Link from "next/link";

const images = [
  "https://utfs.io/f/fd7526e3-174b-407b-a802-7cfdf1f5b0df-nm33wo.jpeg",
];

const profilePic = images.map((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex"> 
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
