"use client"

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
    href: string;
    title: string;
    gradientLeft: string;
    gradientRight: string;
    icon: ReactNode;
}

export function LinkButton({ href, title, gradientLeft, gradientRight, icon }: Props) {
    return (
        <motion.a
            className="flex flex-wrap gap-2 items-center justify-center"
            whileHover={{ scale: 1.05 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                textDecoration: 'none',
                fontFamily: "Roboto",
                fontWeight: '500',
                fontStyle: 'normal',
                background: `linear-gradient(to right, ${gradientLeft}, ${gradientRight})`,
                marginTop: '8px',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
            }}
        >{icon}{title}</motion.a>
    )
}