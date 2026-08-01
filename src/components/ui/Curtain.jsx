import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useBlocker, useNavigation } from "react-router";
import Spinner from "./Spinner";

const MotionSpinner = motion.create(Spinner);

/**
 *
 * @param {{from: String, to: String}[]} config
 */
export function CurtainManager({ config, showCurtain, curtainPhase, setCurtainPhase }) {
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

    const proceed = () => {
        if (blocker.state === "blocked") {
            blocker.proceed();
        }
    };

    useEffect(() => {
        if (blocker.state === "blocked") {
            showCurtain();
        }
    }, [blocker, blocker.state, showCurtain]);
    // return {blockerState: blocker.state, proceed}
    return (
        <AnimatePresence mode="wait">
            {curtainPhase === "uncovering" || curtainPhase === null ? null : (
                <Curtain
                    phase={curtainPhase}
                    setPhase={setCurtainPhase}
                    proceed={proceed}
                    blockerState={blocker.state}
                ></Curtain>
            )}
        </AnimatePresence>
    );
}
/**
 *
 * @param {{phase: "covering" | "waiting" | "uncovering"}} param0
 */
function Curtain({ phase, setPhase, proceed, blockerState }) {
    const navigation = useNavigation();

    useEffect(() => {
        const isRouterIdle = blockerState === "unblocked";

        if (phase === "waiting" && isRouterIdle) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setPhase("uncovering");
                });
            });
        }
    }, [blockerState, navigation.state, phase, setPhase]);

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
                    proceed();

                    setPhase("waiting");
                }
            }}
        >
            <MotionSpinner
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            ></MotionSpinner>
        </motion.div>
    );
}

export default Curtain;
