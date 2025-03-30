"use client"

import { useMobile } from "@/app/hooks/use-mobile";
import { ProjectCard } from "../project-card/project-card";
import { Skill } from "../skill-label/skill";

interface ITechnology {
	index: number;
	name: string;
}

interface IProjectCardData {
	index: number;
	title: string;
	link: string;
	description: string;
	starCount?: number | undefined;
	technologies: Array<ITechnology>;
}

const projects: Array<IProjectCardData> = [
	{
		index: 1,
		title: "Akodo Tools (Private)",
		description: "A desktop app made for music producer Akodo Fenyx, it contains real-time currency updates using web scraping of financial data, conversions and calculations of Robux currency rates (BRL, USD, EUR) and much more.",
		link: "",
		technologies: [
			{ index: 1, name: "Typescript" },
			{ index: 2, name: "Tauri" },
			{ index: 3, name: "Next.js" },
			{ index: 4, name: "Tailwindcss" },
			{ index: 5, name: "React" },
			{ index: 6, name: "Rust" },
			{ index: 7, name: "Web Scraping" }
		]
	},
	{
		index: 2,
		title: "Dev's Store Bot (Private)",
		description: "Sales and support bot for the Discord Dev's Store server. It has a stock system, tickets for support and customer service, as well as various other functions for handling investors and clients.",
		link: "",
		technologies: [
			{ index: 1, name: "Typescript" },
			{ index: 2, name: "SQLite" },
			{ index: 3, name: "TypeORM" },
			{ index: 4, name: "Discord.js" },
			{ index: 5, name: "DiscordX" }
		]
	},
	{
		index: 3,
		title: "Better Discord Tickets",
		description: "This is a bot for a public ticket system, it's an open source alternative for anyone who would like to have their own ticket system on Discord.",
		link: "",
		technologies: [
			{ index: 1, name: "Typescript" },
			{ index: 2, name: "SQLite" },
			{ index: 3, name: "TypeORM" },
			{ index: 4, name: "Discord.js" },
			{ index: 5, name: "DiscordX" }
		]
	},
	{
		index: 4,
		title: "My portfolio",
		description: "That's the website you're on now, where I've gathered all my experience and skills in one place.",
		link: "",
		technologies: [
			{ index: 1, name: "Typescript" },
			{ index: 2, name: "Next.js" },
			{ index: 3, name: "React" },
			{ index: 4, name: "Tailwindcss" }
		]
	}
];

export function ProjectsContainer() {
	const isMobile = useMobile(768);

	return (
		<section className="container m-auto">
			<h2 className="text-4xl mb-2 font-bold">Projects 🚀</h2>
			<p className="text-xl mb-5 text-gray-400">Here are some of my featured projects. Each one represents different skills and technologies I've worked with.</p>
			<div className={`${isMobile ? "flex flex-col gap-5": "grid grid-cols-2 gap-10"}`}>
				{projects.map((data) => (
					<ProjectCard
						key={data.index}
						starCount={data.starCount}
						title={data.title}
						link={data.link}
						description={data.description}
					>
						{data.technologies.map((tech) => (
							<Skill key={tech.index} name={tech.name}/>
						))}
					</ProjectCard>
				))}
			</div>
		</section>
	)
}