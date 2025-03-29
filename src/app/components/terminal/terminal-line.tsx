import type { PropsWithChildren } from "react";

interface Props {
    path?: string;
}

export function TerminalLine({ path, children }: PropsWithChildren<Props>) {
    return (
        <p
            className={`font-mono ${path ? "mt-2" : ""} w-fit break-words`}
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        >
            {path ? <span className="text-green-400 mr-2">{path}</span> : ""}
            {children}
        </p>
    );
}