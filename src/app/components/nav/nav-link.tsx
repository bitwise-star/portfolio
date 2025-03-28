import { motion } from "motion/react";

interface Props {
	href: string;
	name: string;
}

const NavLink = ({ href, name }: Props) => {
	return (
		<motion.a
			className="font-['Roboto'] text-lg text-gray-300 hover:text-white transition-colors"
			whileHover={{ scale: 1.1 }}
			href={href}>{name}
		</motion.a>
	)
}

export default NavLink;