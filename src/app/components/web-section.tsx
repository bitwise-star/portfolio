import type { PropsWithChildren } from "react";

interface Props {
    title: string;
    description: string;
    delay?: number;
}

export function WebSection({ title, description, children }: PropsWithChildren<Props>) {
    return (
        <section className="container m-auto">
            <h2 className="text-4xl mb-2 font-bold">{title}</h2>
            <p className="text-xl mb-5 text-gray-400">{description}</p>
            {children}
        </section>
    )
}