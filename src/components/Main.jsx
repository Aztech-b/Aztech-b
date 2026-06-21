import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import styles from "../styles/main.module.css";

function Main() {
    return (
        <>
            <div className={styles.main}>
                <motion.div
                    initial={{ "--color-1": "#fff", "--color-2": "#fff" }}
                    animate={{
                        "--color-1": ["#fff", "#fff", "#fff", "#000", "#000", "#fff", "#fff"],
                        "--color-2": ["#000", "#000", "#fff", "#fff", "#fff", "#fff", "#000"],
                        transition: {
                            // times: [0, 0.25, 0.375, 0.5, 0.75, 0.875, 1],
                            ease: "easeIn",
                            duration: 10,
                            repeatType: "loop",
                            repeat: Infinity,
                        },
                    }}
                    className={styles.box}
                >
                    <div className={styles.name}>Bakdaulet</div>
                </motion.div>
                <ChevronDown size={60}></ChevronDown>
            </div>
        </>
    );
}

export default Main;
