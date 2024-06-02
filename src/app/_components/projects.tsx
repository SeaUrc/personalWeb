import ProjectCard from "./projectCard";

export default function Projects() {
    return (
        <div>
            <ul className="-translate-y-10">
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                        href="https://www.google.com"
                        techs={["React", "Next.js", "Tailwind CSS", "tester"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                        href="https://www.google.com"
                        techs={["React", "Next.js", "Tailwind CSS", "tester", "lucas", "tester", "nick", "tester"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                        href="https://www.google.com"
                        techs={["React"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                        href="https://www.google.com"
                        techs={["React", "Next.js", "Tailwind CSS", "tester", "tester", "tester", "tester", "tester"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                        href="https://www.google.com"
                        techs={[]}
                    />
                </li>
            </ul>
        </div>
    );
}