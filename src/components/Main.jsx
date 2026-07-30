import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import useParallaxBackground from "../hooks/useParallaxBackground";
import styles from "../styles/main.module.css";
import DecryptedText from "./DecryptedText";
import SoftAurora from "./ui/SoftAurora";

function Main({ className, ...props }) {
    const { isWebGLon, bgY } = useParallaxBackground();
    return (
        <div className={cn("relative backgroundContainer", className)} {...props}>
            {isWebGLon ? (
                <motion.div className="absolute inset-0 -z-10 items-center" style={{ y: bgY }}>
                    <SoftAurora
                        speed={0.6}
                        scale={1.5}
                        brightness={1}
                        color1="#6633ee"
                        color2="#e100ff"
                        noiseFrequency={2.5}
                        noiseAmplitude={1}
                        bandHeight={0.5}
                        bandSpread={1}
                        octaveDecay={0.1}
                        layerOffset={0}
                        colorSpeed={1}
                        enableMouseInteraction
                        mouseInfluence={0.25}
                    />
                </motion.div>
            ) : (
                <div
                    className={`absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
                         [background:radial-gradient(125%_125%_at_50%_75%,var(--background)_40%,#63e_100%)]`}
                ></div>
            )}
            <div className={`content`}>
                <div className={styles.main}>
                    <div className={styles.box}>
                        <DecryptedText
                            text="Bakdaulet"
                            speed={60}
                            maxIterations={2000}
                            animateOn="view"
                            clickMode="toggle"
                            parentClassName="heading"
                            sequential
                        />
                    </div>
                    <ChevronDown size={60}></ChevronDown>
                </div>
            </div>
        </div>
    );
}

export default Main;
