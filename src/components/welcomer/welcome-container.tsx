"use client"

import { useMobile } from "@/hooks/use-mobile";
import { Welcome } from "./welcome";
import { WelcomerTerminal } from "./welcomer-terminal";

export function WelcomeContainer() {
	const mobile = Boolean(useMobile(1024));

	return (
		<div className={`container m-auto ${mobile ? "flex flex-col gap-20" : "grid grid-cols-2 items-center gap-10"}`}>
			<Welcome />
			<WelcomerTerminal />
		</div>
	)
}