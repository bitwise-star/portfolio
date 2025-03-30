"use client"

import { useMobile } from "@/app/hooks/use-mobile";
import { Welcome } from "../welcomer/welcome";
import { WelcomerTerminal } from "../welcomer/welcomer-terminal";

export function WelcomeContainer() {
	const mobile = useMobile(768);

	return (
		<div className={`container m-auto ${mobile ? "flex flex-col gap-10" : "grid grid-cols-2 items-center gap-10"}`}>
			<Welcome />
			<WelcomerTerminal />
		</div>
	)
}