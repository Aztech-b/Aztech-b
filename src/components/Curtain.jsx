import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router";

function Curtain() {
    const location = useLocation();
    const controls = useAnimation();

    useEffect(() => {
        async function transition() {
            await controls.start({ scaleX: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
            await controls.start({ scaleX: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } });
        }
        transition();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={controls}
            className="fixed z-40 top-0 left-0 w-full h-screen bg-my-accent origin-left pointer-events-none"
        ></motion.div>
    );
}

export default Curtain;
