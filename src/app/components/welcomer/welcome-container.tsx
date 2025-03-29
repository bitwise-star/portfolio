"use client"

import { useMobile } from "@/app/hooks/use-mobile";
import { Welcome } from "../welcomer/welcome";
import { WelcomerTerminal } from "../welcomer/welcomer-terminal";

export function WelcomeContainer() {
	const mobile = useMobile(1080);

	return (
		<div className={`container m-auto ${mobile ? "grid " : ""}`}>
			<Welcome />
			<div className={`${mobile ? "mt-5" : ""}`}>
				<WelcomerTerminal />
			</div>
		</div>
	)
}