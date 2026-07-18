import { motion } from "motion/react";

function Icon({ icon, label }) {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			className={
				"flex justify-center items-center flex-col gap-1.5 hover:scale-[1.2] transition-all duration-75 ease-linear"
			}
		>
			{icon}
			{label}
		</motion.div>
	);
}

export default Icon;
