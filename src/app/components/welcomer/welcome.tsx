"use client"

import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';

export function Welcome() {
	return (
		<div>
			<div className="flex items-center gap-1 mb-2 w-fit">
				<FaMapMarkerAlt size={20} fill="#ff5990" className="animate-bounce" />
				<p className="font-['Roboto'] text-gray-300 text-sm sm:text-base md:text-lg">
					Rio de Janeiro, Brazil</p>
			</div>
			<h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 w-fit">
				<span className="text-white">Hello, I'm</span>{" "}
				<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
					Bitwise Star
				</span>{" "}
				<span className="animate-wave inline-block">👋</span>
			</h1>
			<p className="text-gray-400 font-medium break-words text-2xl ">
				Full Stack Developer passionate about Node.js, Java, and Kotlin. Building innovative solutions since 2018.
			</p>
			<div className="flex flex-wrap gap-2 w-fit">
				<a href="https://github.com/bitwise-star" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
					<Button
						sx={{
							background: 'linear-gradient(to right, #374151, #1f2937)',
							marginTop: 2,
							color: 'white',
							'&:hover': {
								background: 'linear-gradient(to right, #4b5563, #374151)',
							},
						}}
						variant="contained"
						startIcon={<GitHubIcon />}
					>
						See my Github
					</Button>
				</a>
			</div>
		</div>
	);
}