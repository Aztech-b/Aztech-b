import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import styles from "../styles/main.module.css";

function Main() {
    const whiteColor = "#fff";
    const darkColor = "#000";
    return (
        <div className="relative backgroundContainer">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_75%,var(--background)_40%,#63e_100%)]"></div>
            <div className={`content`}>
                <div className={styles.main}>
                    <motion.div
                        initial={{ "--color-1": whiteColor, "--color-2": whiteColor }}
                        animate={{
                            "--color-1": [
                                whiteColor,
                                whiteColor,
                                whiteColor,
                                darkColor,
                                darkColor,
                                whiteColor,
                                whiteColor,
                            ],
                            "--color-2": [
                                darkColor,
                                darkColor,
                                whiteColor,
                                whiteColor,
                                whiteColor,
                                whiteColor,
                                darkColor,
                            ],
                            transition: { ease: "easeIn", duration: 10, repeatType: "loop", repeat: Infinity },
                        }}
                        className={styles.box}
                    >
                        <div className={styles.name}>Bakdaulet</div>
                    </motion.div>
                    <ChevronDown size={60}></ChevronDown>
                </div>
            </div>
        </div>
    );
}

export default Main;
