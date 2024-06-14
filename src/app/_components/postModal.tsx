

export default function PostModal(props: { post: { id: number, url: string, description: string, takenAt: Date, createdAt: Date | null } }) {
    return (
        <div className="flex flex-col w-full h-full">
            <img src={props.post.url} alt="dog"/>
            <div>
                {props.post.description}
            </div>
        </div>
    );
};