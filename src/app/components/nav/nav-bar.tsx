"use client";

import { VscTerminalBash } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import NavLink from "./nav-link";
import { motion, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	const baseTitleText = "Bitwise Star";
	const titleCharCount = useMotionValue(0);
	const rounded = useTransform(titleCharCount, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseTitleText.slice(0, latest)
  );

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const controls = animate(titleCharCount, baseTitleText.length, {
			type: "tween",
			duration: 2,
			delay: 0.5,
			ease: "easeInOut"
		});

		return controls.stop;
	}, [titleCharCount])

	return (
		<header
			className={cn(
				"sticky top-0 z-50 transition-all flex items-center",
				scrolled
					? "bg-black/70 backdrop-blur-md border-b border-b-white"
					: "bg-transparent",
			)}
		>
			<div className="container flex m-auto pb-5 pt-5">
				<div>
					<div className={"flex items-center gap-2"}>
						<VscTerminalBash size={40}/>
						<h1 className="font-mono font-semibold medium text-2xl text-gray-100 flex items-center">
							<motion.span>{displayText}</motion.span>
							<span
								className="ml-0.75 w-2 h-5 inline-block bg-white animate-caret-blink"
							/>
						</h1>
					</div>
				</div>
				<nav className="flex gap-5 ml-auto items-center">
					<NavLink href="/" name="About" />
					<NavLink href="/" name="Projects" />
					<NavLink href="/" name="Experience" />
					<NavLink href="/" name="Contact" />
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
