"use client"

import type { PropsWithChildren } from "react";
import { TerminalTitleDot } from "./termina-title-dot";

interface Props {
	title: string;
}

interface ITerminalDotColors {
	index: number;
	colorHex: string;
	hoverColor: string;
}

const terminalDots: Array<ITerminalDotColors> = [
	{ index: 1, colorHex: "#eb695d", hoverColor: "#d45246" },
	{ index: 2, colorHex: "#ebd65d", hoverColor: "#d4b346" },
	{ index: 3, colorHex: "#5deb5d", hoverColor: "#3bb636" },
];

export function Terminal({ title, children }: PropsWithChildren<Props>) {
	return (
		<div className="bg-black border-gray border rounded-md w-full">
			<div className="flex items-center gap-5 p-3 border-b-gray border-b">
				<div className="flex absolute gap-1">
					{terminalDots.map((obj) => (
						<TerminalTitleDot
							key={obj.index}
							width={13}
							height={13}
							colorHex={obj.colorHex}
							hoverColor={obj.hoverColor}
						/>
					))}
				</div>
				<p className="text-gray-300 font-['Roboto'] font-extralight text-center m-auto">
					{title}
				</p>
			</div>
			<div className="bg-[#0e0e0f] p-5">
				{children}
			</div>
		</div>
	);
}
