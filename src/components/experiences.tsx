"use client"

import { useMobile } from "@/hooks/use-mobile";
import { WebSection } from "./web-section";
import { Card } from "./card";
import { Skill } from "./skill-label/skill";

interface IExperienceCardData {
    index: number;
    title: string;
    description: string;
    technologies: Array<string>;
}

const experiences: Array<IExperienceCardData> = [
    {
        index: 1,
        title: "Full Stack Developer",
        description: "I’ve been working as a freelancer for over 4 years, collaborating with a wide range of clients and delivering successful projects. My experience includes developing Discord bots, desktop applications, and providing other custom solutions.",
        technologies: ["Typescript", "Next.js", "React", "Tailwindcss", "Tauri", "Rust", "Discord.js", "DiscordX"]
    },
    {
        index: 2,
        title: "Game Developer (Scripter)",
        description: "I work as a scripter on the Roblox platform, with solid experience in Luau scripting. In addition to development, I’ve also held administrative roles on game development studios.",
        technologies: ["Luau", "Documents", "Roblox API", "Managment", "Game Development"],
    },
];

export function Experiences() {
    const isMobile = useMobile(768);

    return (
        <WebSection
            title="💼 Experiences"
            description="Here are some of my experiences, each one represents different skills and technologies I've worked with."
        >
            <div className={`${isMobile ? "flex flex-col gap-5": "grid grid-cols-2 gap-10"}`}>
                {experiences.map((data) => (
                    <Card
                        key={data.index}
                        title={data.title}
                        description={data.description}
                        hideButton={true}
                    >
                        {data.technologies.map((tech) => (
                            <Skill
                                key={tech}
                                name={tech}
                            />
                        ))}
                    </Card>
                ))}
            </div>
        </WebSection>
    );
}