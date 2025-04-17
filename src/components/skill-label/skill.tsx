import { SkillColorData } from "@/constants/skill-color-data"
import { SkillLabel } from "./skill-label";

interface Props {
    name: string
}

export function Skill({ name }: Props) {
    const colorData = SkillColorData[name];

    if (!SkillColorData[name])
        return ( <SkillLabel name={name} /> );

    return (
        <SkillLabel
            name={name}
            backgroundColor={colorData.backgroundColor}
            borderColor={colorData.borderColor}
            textColor={colorData.textColor}
        />
    );
}