import Image from "next/image";

export default function ProjectCard(props: { startDate: string, endDate: string, title: string, description: string, techs: string[], href?: string }) {

    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row px-5 py-10 hover:bg-gray-600 transition-all rounded-lg">
                <div className="text-sm w-1/4 text-gray-400 mr-3">
                    {props.startDate + " - " + props.endDate}
                </div>
                <div className="w-3/4">
                    <div className="text-xl font-bold flex flex-row justify-between">
                        <div>
                            {props.title}
                        </div>
                        {props.href &&
                        <Image
                            className="-translate-y-1"
                            src="./arrow-right-top-svgrepo-com.svg"
                            alt="arrow"
                            width={30}
                            height={30}
                        />}
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                        {props.description}
                    </div>
                    <div>
                        <ul className="flex flex-row flex-wrap mt-4 -ml-3">
                            {props.techs.map((tech, ind) => {
                                return (
                                    <li key={ind} className="ml-3 my-2 py-2 px-3 bg-gray-300 rounded-xl">
                                        <div className="text-black text-xs">
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