import type { PropsWithChildren } from "react";

interface Props {
	href: string;
}

export function SocialButton({ href, children }: PropsWithChildren<Props>) {
	return (
		<div className="rounded-full bg-[#222222] hover:bg-[#333333] p-2 cursor-pointer flex items-center">
			{children}
		</div>
	);
}