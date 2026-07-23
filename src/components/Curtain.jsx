import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router";

function Curtain({
    onEnterAnimationEnd = () => {},
    onExitAnimationEnd = () => {},
    onEnterAnimationStart = () => {},
    onExitAnimationStart = () => {},
    to,
}) {
    const controls = useAnimation();
    const navigation = useNavigation();
    const navigate = useNavigate();

    /** @type {[transitionState: "none" | "enter" | "idle" | "exit", setTransitionState: CallableFunction]} */
    const [transitionState, setTransitionState] = useState();

    useEffect(() => {
        (async () => {
            setTransitionState("enter");
            onEnterAnimationStart();
            await controls.start({ scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
            onEnterAnimationEnd();
            setTransitionState("idle");
            navigate(to.current);
        })();
    }, []);

    useEffect(() => {
        if (navigation.state === "idle" && transitionState === "idle") {
            (async () => {
                await controls.start({ scaleX: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
                onExitAnimationEnd();
                setTransitionState("none");
            })();
        }
    }, [controls, navigation.state, transitionState]);

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
