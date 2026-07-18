import { motion } from "motion/react";
import styles from "../styles/icon.module.css";

function Icon({ icon, label }) {
	return (
		<motion.div whileHover={{ scale: 1.1 }} className={styles.icon}>
			{icon}
			{label}
		</motion.div>
	);
}

export default Icon;
