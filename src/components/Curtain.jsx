import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router";

function Curtain({ onComplete, to }) {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();

    /** @type {["covering" | "waiting" | "uncovering"]} */
    const [phase, setPhase] = useState("covering");
    useEffect(() => {
        const isRouterIdle = navigation.state === "idle";

        if (phase === "waiting" && isRouterIdle) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setPhase("uncovering");
                });
            });
        }
    }, [phase, location.pathname, navigation.state, to]);

    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-60 top-0 left-0 w-full h-screen bg-my-accent origin-left pointer-events-auto touch-none"
            style={{ transformOrigin: phase === "covering" ? "left" : "right" }}
            onAnimationComplete={() => {
                if (phase === "covering") {
                    navigate(to);
                    setPhase("waiting");
                } else if (phase === "uncovering") {
                    onComplete();
                }
            }}
        />
    );
}

export default Curtain;
