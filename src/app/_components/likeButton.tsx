'use client'

import { useState } from 'react'
import { db } from '~/server/db'
import { eq } from 'drizzle-orm';
import { posts } from '~/server/db/schema';

export default function LikeButton({ postId, intialLikes }: { postId: number, intialLikes: number | null }) {
    const [likes, setLikes] = useState(intialLikes);

    const handleLikeClick = async () => {
        setLikes(likes! + 1);
        try {
            await db.update(posts)
                .set({ likes: likes })
                .where(eq(posts.id, postId))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                {likes}
            </div>
            <div onClick={handleLikeClick}>
                hearts
            </div>
        </div>
    );
}