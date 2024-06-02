export default function ProjectCard(props: { startDate: string, endDate: string, title: string, description: string, href: string, techs: string[] }) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            <div className="flex flex-row px-5 py-10 hover:bg-gray-600 transition-all rounded-lg">
                <div className="w-1/4 text-gray-400">
                    {props.startDate + " - " + props.endDate}
                </div>
                <div className="w-3/4">
                    <div className="text-xl font-bold">
                        {props.title}
                    </div>
                    <div className="mt-4 text-gray-400">
                        {props.description}
                    </div>
                    <div>
                        <ul className="flex flex-row flex-wrap mt-4 -ml-3">
                            {props.techs.map((tech, ind) => {
                                return (
                                    <li key={ind} className="ml-3 my-2 py-2 px-3 bg-gray-300 rounded-2xl">
                                        <div className="text-black text-sm">
                                            {tech}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
}