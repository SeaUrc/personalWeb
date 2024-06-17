import { headers } from 'next/headers';
import { db } from '~/server/db';
import PostModal from '../_components/postModal';
import Image from 'next/image';
import Link from 'next/link';
import { desc } from 'drizzle-orm';
import LikeButton from '../_components/likeButton';
import { group } from 'console';

type Post = {
    id: number;
    url: string;
    description: string;
    takenAt: Date;
    createdAt: Date | null;
    likes: number | null;
}

export default async function About() {
    let picInd: number = 0;

    headers();
    const posts = await db.query.posts.findMany({
        orderBy: (model, { desc }) => desc(model.takenAt),
    });

    // const posts = [
    //     "https://utfs.io/f/e9009234-db9a-4b38-a4e5-256535660d92-cn1y5a.jpeg",
    //     "https://utfs.io/f/982f5a8f-6209-45b7-b7cd-b6dc9c11baa1-1i4c68.jpeg",
    //     "https://utfs.io/f/63bb9e72-36ba-4dcb-bbf3-606a1eb0d9d8-7uo10z.jpeg",
    //     "https://utfs.io/f/63bb02f3-1889-4f65-81ea-3886a09e2314-81h2p8.jpeg",
    //     "https://utfs.io/f/ba2cdb19-6af4-4252-9828-610dded03f69-g9k2o2.jpeg",
    //     "https://utfs.io/f/d52ba060-293d-4fab-a8ae-0b2ab8206216-9zacyc.jpeg",
    //     "https://utfs.io/f/9e884e5e-4e31-4b78-8e7b-7e454ca4b1e6-9dqfzf.jpeg",
    //     "https://utfs.io/f/6d95190a-eaf5-4c75-a4f4-e084e2823393-4ey4fd.jpeg",
    //     "https://utfs.io/f/788e5359-ac32-48f9-afd3-4959d47940f2-32eg8h.jpeg"
    // ]

    const getFormattedDate = (date: Date | undefined) => {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            return "Invalid Date";
        }

        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }

    const groupIntoYears = (posts: Post[]) => {
        const groupedByYear = posts.reduce((acc, curr) => {
            const year = curr.takenAt.getFullYear();
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year]!.push(curr);
            return acc;
        }, {} as Record<number, Post[]>);

        const groupedArray = Object.entries(groupedByYear)
            .map(([year, items]) => ({
                year: parseInt(year),
                items: items.sort((a, b) => b.takenAt.getTime() - a.takenAt.getTime()),
            }));

        groupedArray.sort((a, b) => b.year - a.year);

        return groupedArray;
    }

    const formmattedPosts = groupIntoYears(posts);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col mx-10 font-mono max-w-6xl min-h-screen">
                <div className="mt-24 mb-20">
                    <div className="flex flex-row justify-between w-full">
                        <h1 className="text-5xl font-bold">
                            Lucas's Page
                        </h1>
                        <Link href="/">
                            <Image
                                src="/home.svg"
                                alt="home button"
                                className="w-8 h-8 opacity-70 transition-all duration-300 hover:opacity-100"
                                width={30}
                                height={30}
                            />
                        </Link>

                    </div>
                    <h2 className="mt-8 text-lg max-w-[60rem]">
                        Lucas is a mini golden doodle. He's 7 years old and his birthday is on the 1st of June.
                        He loves to play frisbee, go on car rides, and steal your shoes.
                    </h2>
                </div>
                
                    {
                        formmattedPosts.map((posts, ind) => {
                            return (
                                <div key={ind} className="flex flex-col">
                                    <div className="text-2xl text-bold underline mb-2">
                                        {posts.year}
                                    </div>
                                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-20">
                                        {posts.items.map((post, ind) => {
                                            return (
                                                <div key={ind} className="flex flex-col justify-center items-center w-full h-full p-5 -translate-x-5 rounded-xl hover:bg-gray-600 transition-all duration-300">
                                                    <div className="aspect-square">
                                                        <img src={post.url} alt={"My dog"} className="object-contain w-full h-full"></img>
                                                    </div>
                                                    <div className="flex justify-between w-full">
                                                        <div className="flex flex-col">
                                                            <div className="text-lg">
                                                                {post.description}
                                                            </div>
                                                            <div className="">
                                                                {
                                                                    getFormattedDate(post.takenAt)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    }
            </div>
        </div>
    )
}