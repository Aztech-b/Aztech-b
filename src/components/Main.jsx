import { useTheme } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import styles from "../styles/main.module.css";

function Main() {
    const theme = useTheme();
    const whiteColor = "#fff";
    const darkColor = theme.palette.background.default;
    console.log(darkColor);
    return (
        <>
            <div className={styles.main}>
                <motion.div
                    initial={{ "--color-1": whiteColor, "--color-2": whiteColor }}
                    animate={{
                        "--color-1": [whiteColor, whiteColor, whiteColor, darkColor, darkColor, whiteColor, whiteColor],
                        "--color-2": [darkColor, darkColor, whiteColor, whiteColor, whiteColor, whiteColor, darkColor],
                        transition: { ease: "easeIn", duration: 10, repeatType: "loop", repeat: Infinity },
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
