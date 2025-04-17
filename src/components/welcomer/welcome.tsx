"use client"

import { FaDiscord, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { LinkButton } from "../link-button";

export function Welcome() {
	return (
		<div>
			<div className="flex items-center gap-1 mb-2 w-fit">
				<FaMapMarkerAlt size={20} fill="#ffffff" className="animate-bounce" />
				<p className="font-['Roboto'] text-gray-300 text-sm sm:text-base md:text-lg">
					Rio de Janeiro, Brazil</p>
			</div>
			<h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 w-fit">
				<span className="text-white">Hello, I'm</span>{" "}
				<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
					Bitwise Star
				</span>{" "}
				<span className="animate-wave inline-block">👋</span>
			</h2>
			<p className="text-gray-400 font-medium break-words text-2xl ">
				Full Stack Developer passionate about Node.js, Java, and Kotlin. Building innovative solutions since 2018.
			</p>
			<div className="flex flex-wrap gap-2 w-fit mt-5">
				<LinkButton
					href="https://discordapp.com/users/1246891471551074428"
					title="Discord"
					gradientLeft="#423fe0"
					gradientRight="#0b1675"
					icon={<FaDiscord/>}
				/>
				<LinkButton
					href="https://www.linkedin.com/in/alice-developer/"
					title="Linkedin"
					gradientLeft="#3f7de0"
					gradientRight="#0b3775"
					icon={<FaLinkedin/>}
				/>
				<LinkButton
					href="https://github.com/bitwise-star"
					title="Github"
					gradientLeft="#6d6d6d"
					gradientRight="#2e2e2e"
					icon={<FaGithub/>}
				/>
			</div>
		</div>
	);
}