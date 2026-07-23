import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router";

function Curtain({ onComplete, to }) {
    const controls = useAnimation();
    const navigation = useNavigation();
    const navigate = useNavigate();
    const hasNavigated = useRef(false);
    const location = useLocation();

    /** @type {["covering" | "waiting" | "uncovering"]} */
    const [phase, setPhase] = useState("covering");
    useEffect(() => {
        const isTargetReached = location.pathname === to;
        const isRouterIdle = navigation.state === "idle";

        if (phase === "waiting" && isTargetReached && isRouterIdle) {
            // Ensure browser painted the DOM under the curtain
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setPhase("uncovering");
                });
            });
        }
    }, [phase, location.pathname, navigation.state, to]);

    // Map current phase to declarative animation variants
    const variants = { covering: { scaleX: 1 }, waiting: { scaleX: 1 }, uncovering: { scaleX: 0 } };

    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={variants[phase]}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 top-0 left-0 w-full h-screen bg-my-accent origin-left pointer-events-none"
            onAnimationComplete={() => {
                // Handle phase transitions strictly AFTER keyframe animations finish
                if (phase === "covering") {
                    navigate(to);
                    setPhase("waiting");
                } else if (phase === "uncovering") {
                    onComplete(); // Safe to unmount now!
                }
            }}
        />
    );
}

export default Curtain;
