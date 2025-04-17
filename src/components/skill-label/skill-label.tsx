interface Props {
    name: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
}

export function SkillLabel({ name, backgroundColor, borderColor, textColor }: Props) {
    return (
        <span
            className="pr-2 pl-2 pb-0.5 pt-0.5 rounded-[2px] text-sm inline-block border-1"
            style={{
                background: backgroundColor || "#27282b",
                borderColor: borderColor || "#424242",
                color: textColor || "#d1d5dc"
            }}
        >
            {name}
        </span>
    )
}