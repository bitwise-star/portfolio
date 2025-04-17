"use client"

import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import type { PropsWithChildren } from "react";

interface Props {
	title: string;
	description: string;
	link?: string;
	hideButton?: boolean;
	starCount?: number;
	buttonText?: string;
}

export function Card({ title, description, link, starCount, hideButton, buttonText, children }: PropsWithChildren<Props>) {
	return (
		<motion.div
			className="w-full bg-[#0e0e0f] border-gray border-1 rounded-[8px] hover:border-gray-400 transition-all"
			whileHover={{
				scale: 1.02
			}}
			whileTap={{
				scale: 1.02,
				borderColor: "#ffffff"
			}}
		>
			<div className="p-5 flex flex-col h-full">
				<div className="flex items-center">
					<p className="font-bold text-2xl w-full">{title}</p>
					{starCount !== undefined ?
						<div className="flex align-middle items-center gap-2">
							<p className="font-bold text-xl">{starCount}</p>
							<FaStar size={20} />
						</div> : ""
					}
				</div>
				<p className="font-medium text-1xl text-gray-400 mb-3">{description}</p>
				<div className="flex flex-wrap gap-2 mt-auto w-full">
					{children}
				</div>
				{!hideButton ?
					<a
						className="font-medium bg-white text-black hover:bg-gray-200 text-center rounded-[2px] mt-5 p-2 w-full block"
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{buttonText ? buttonText : "View"}
					</a>
					: ""
				}
			</div>
		</motion.div>
	)
}