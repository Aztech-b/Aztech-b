import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useBlocker, useLocation, useNavigate, useNavigation } from "react-router";
import Spinner from "./Spinner";

const MotionSpinner = motion.create(Spinner);

/**
 *
 * @param {{from: String, to: String}[]} config
 */
export function useCurtainManager(config) {
    const blocker = useBlocker(({ currentLocation, nextLocation }) => {
        const currentLocationPath = currentLocation.pathname.split("/");
        const nextLocationPath = nextLocation.pathname.split("/");
        const isFrom = config.find((cfg) => cfg.from.split("/")[1] === currentLocationPath[1]);
        const isTo = config.find((cfg) => cfg.to.split("/")[1] === nextLocationPath[1]);
        const isSame = currentLocationPath[1] === nextLocationPath[1];
        if (isFrom && isTo && !isSame) {
            return true;
        }
        return false;
    });
}

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
        >
            <MotionSpinner initial={{ opacity: 0 }} animate={{ opacity: 1 }}></MotionSpinner>
        </motion.div>
    );
}

export default Curtain;
