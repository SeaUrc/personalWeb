import ProjectCard from "./projectCard";

export default function Projects() {
    return (
        <div>
            <ul className="">
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="Present"
                        title="WebRobot"
                        description="Doing research at University of Michigan in program synthesis and web automation. Migrated existing WebRobot to MV3. Added additional capability for multiple windows. (Links to paper published before I was handed project)."
                        href="https://web.eecs.umich.edu/~xwangsd/pubs/pldi22.pdf"
                        techs={["React", "Typescript", "Chrome Web Extensions"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2024"
                        endDate="2024"
                        title="Personal Website"
                        description="The website your currently on. Made with Next and Tailwind. Hosted on Vercel and Github Pages."
                        href="https://sea-urc-github-io.vercel.app/"
                        techs={["Nextjs", "Tailwind", "Drizzle", "Vercel", "Github Actions"]}
                    />
                </li> 
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2023"
                        title="Geoguessr CNN"
                        description="Gathering data to train a CNN to output latitude and longitude based on an image of the location. Preprocessed data using Pillow and NumPy. Implemented and trained a CNN using Python, NumPy, and TensorFlow."
                        techs={["Python", "Numpy", "Selenium", "Tensorflow"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="ResNet-50 Implementation"
                        description="Implemented the ResNet-50 CNN architecture in Tensorflow. Trained the CNN on the ImageNet test."
                        techs={["Python", "Numpy", "Tensorflow"]}
                    />
                </li>
                <li>
                    <ProjectCard
                        startDate="2022"
                        endDate="2022"
                        title="U-Net Implementation"
                        description="Implemented the U-Net architecture to generate masks on cat and dog pictures in TensorFlow. Achieved roughly 92% precision and 94% recall."
                        techs={["Python", "Numpy", "Tensorflow"]}
                    />
                </li>



            </ul>
        </div>
    );
}