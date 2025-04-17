"use client"

import { useMobile } from "@/hooks/use-mobile";
import { Skill } from "./skill-label/skill";
import { Card } from "./card";
import { WebSection } from "./web-section";

interface IProjectCardData {
	index: number;
	title: string;
	link: string;
	description: string;
	starCount?: number | undefined;
	technologies: Array<string>;
}

const projects: Array<IProjectCardData> = [
	{
		index: 1,
		title: "Akodo Tools (Private)",
		description: "A desktop app made for music producer Akodo Fenyx, it contains real-time currency updates using web scraping of financial data, conversions and calculations of Robux currency rates (BRL, USD, EUR) and much more.",
		link: "",
		technologies: ["Typescript", "Tauri", "Next.js", "Tailwindcss", "React", "Rust", "Web Scraping"]
	},
	{
		index: 2,
		title: "Dev's Store Bot (Private)",
		description: "Sales and support bot for the Discord Dev's Store server. It has a stock system, tickets for support and customer service, as well as various other functions for handling investors and clients.",
		link: "",
		technologies: ["Typescript", "SQLite", "TypeORM", "Discord.js", "DiscordX"]
	},
	{
		index: 3,
		title: "Better Discord Tickets",
		description: "This is a bot for a public ticket system, it's an open source alternative for anyone who would like to have their own ticket system on Discord.",
		link: "https://github.com/bitwise-star/better-discord-tickets",
		technologies: ["Typescript", "SQLite", "TypeORM", "Discord.js", "DiscordX"]
	},
	{
		index: 4,
		title: "My portfolio",
		description: "That's the website you're on now, where I've gathered all my experience and skills in one place.",
		link: "https://github.com/bitwise-star/portfolio",
		technologies: ["Typescript", "Next.js", "React", "Tailwindcss"]
	}
];

export function Projects() {
	const isMobile = useMobile(768);
	return (
		<WebSection
			title="🚀 Projects"
			description="Here are some of my featured projects. Each one represents different skills and technologies I've worked with."
		>
			<div className={`${isMobile ? "flex flex-col gap-5" : "grid grid-cols-2 gap-10"}`}>
				{projects.map((data) => (
					<Card
						key={data.index}
						starCount={data.starCount}
						title={data.title}
						link={data.link}
						description={data.description}
						buttonText="View Project"
						hideButton={data.link === ""}
					>
						{data.technologies.map((tech) => (
							<Skill key={tech} name={tech} />
						))}
					</Card>
				))}
			</div>
		</WebSection>
	)
}