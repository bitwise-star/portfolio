"use client"

import { motion } from "motion/react";

interface Props {
	width: number;
	height: number;
	colorHex: string;
	hoverColor: string;
}

export function TerminalTitleDot({
	width,
	height,
	colorHex,
	hoverColor,
}: Props) {
	return (
		<motion.div
			className="transition-all rounded-full"
			transition={{ duration: 0.05 }}
			whileHover={{
				background: hoverColor,
				cursor: "pointer"
			}}
			whileTap={{
				scale: 0.8
			}}
			style={{
				width,
				height,
				background: colorHex,
			}}
		/>
	);
}
