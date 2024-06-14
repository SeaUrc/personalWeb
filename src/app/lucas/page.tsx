import { headers } from 'next/headers';
import { db } from '~/server/db';
import PostModal from '../_components/postModal';

export const dynamic = 'force-dynamic';

export default async function About() {
    let picInd: number = 0;

    headers();
    const posts = await db.query.posts.findMany({
        orderBy: (model, { desc }) => desc(model.takenAt),
    });

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
            <div className="flex flex-row">
                <div className="flex flex-col w-5/6 h-1/2">
                    <div>
                        <img src={posts[picInd]?.url} alt="dog" />
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
                            <PostModal post={post} />
                        );
                    })}
                </div>
            </div>
            {/* {posts.map((post) => (
                <PostModal post={post}/>
            ))} */}
        </div>
    )
}