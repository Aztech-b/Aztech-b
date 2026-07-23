import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect } from "react";

function Curtain({ onEnterAnimationEnd = () => {}, onExitAnimationEnd = () => {} }) {
    const controls = useAnimation();

    useEffect(() => {
        async function transition() {
            await controls.start({ scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
            onEnterAnimationEnd();
            await controls.start({ scaleX: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
            onExitAnimationEnd();
        }
        transition();
    }, [controls, onEnterAnimationEnd, onExitAnimationEnd]);
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={controls}
                    className="fixed z-40 top-0 left-0 w-full h-screen bg-my-accent origin-left pointer-events-none"
                ></motion.div>
            </AnimatePresence>
        </>
    );
}

export default Curtain;
