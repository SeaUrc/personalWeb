import { headers } from 'next/headers';
import { db } from '~/server/db';
import PostModal from '../_components/postModal';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function About() {
    let picInd: number = 0;

    headers();
    // const posts = await db.query.posts.findMany({
    //     orderBy: (model, { desc }) => desc(model.takenAt),
    // });

    const posts = [
        "https://utfs.io/f/e9009234-db9a-4b38-a4e5-256535660d92-cn1y5a.jpeg",
        "https://utfs.io/f/982f5a8f-6209-45b7-b7cd-b6dc9c11baa1-1i4c68.jpeg",
        "https://utfs.io/f/63bb9e72-36ba-4dcb-bbf3-606a1eb0d9d8-7uo10z.jpeg",
        "https://utfs.io/f/63bb02f3-1889-4f65-81ea-3886a09e2314-81h2p8.jpeg",
        "https://utfs.io/f/ba2cdb19-6af4-4252-9828-610dded03f69-g9k2o2.jpeg",
        "https://utfs.io/f/d52ba060-293d-4fab-a8ae-0b2ab8206216-9zacyc.jpeg",
        "https://utfs.io/f/9e884e5e-4e31-4b78-8e7b-7e454ca4b1e6-9dqfzf.jpeg",
        "https://utfs.io/f/6d95190a-eaf5-4c75-a4f4-e084e2823393-4ey4fd.jpeg",
        "https://utfs.io/f/788e5359-ac32-48f9-afd3-4959d47940f2-32eg8h.jpeg"
    ]
    const getFormattedDate = (date: Date | undefined) => {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            return "Invalid Date";
        }

        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }

    return (
        <div className="flex flex-col">
            <div>
                <h1>
                    My dog lucas
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {posts.map((post, ind) => {
                    return (
                        <div key={ind} className="flex flex-col justify-center items-center w-full h-full">
                            <div className="aspect-square">
                                <img src={post} alt={"My dog"} className="object-contain w-full h-full"></img>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <div>
                                    temporary description
                                </div>
                                <div>
                                    {
                                        getFormattedDate(new Date(2023, 5, 15))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="flex flex-col w-5/6 h-1/2">
                    <div className="flex justify-center items-center w-full border-2 border-white h-[80vh]">
                        <img className="object-contain max-h-full max-w-full" src={posts[picInd]?.url} alt="dog" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            {posts[picInd]?.description}
                        </div>
                        <div>
                            {
                                getFormattedDate(posts[picInd]?.takenAt)
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/6">
                    {posts.map((post) => {
                        return (
                            <PostModal key={post.id} post={post} />
                        );
                    })}
                </div> */}
            </div>
            {/* {posts.map((post) => (
                <PostModal post={post}/>
            ))} */}
        </div>
    )
}