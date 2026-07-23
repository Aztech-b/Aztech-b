import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMemo } from "react";
import styles from "../styles/main.module.css";
import DecryptedText from "./DecryptedText";
import SoftAurora from "./SoftAurora";

function Main() {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300], { clamp: true });
    const isWebGLon = useMemo(() => {
        try {
            const canvas = document.createElement("canvas");
            canvas.id = "webglTestCanvas";
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            return false;
        } finally {
            const canvas = document.querySelector("#webglTestCanvas");
            if (canvas) {
                document.removeChild(canvas);
            }
        }
    }, []);
    return (
        <div className="relative backgroundContainer">
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
                        <div className={styles.name}>
                            <DecryptedText
                                text="Bakdaulet"
                                speed={60}
                                maxIterations={20}
                                animateOn="view"
                                clickMode="toggle"
                                parentClassName="heading"
                            />
                        </div>
                    </div>
                    <ChevronDown size={60}></ChevronDown>
                </div>
            </div>
        </div>
    );
}

export default Main;
