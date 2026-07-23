import { motion } from "motion/react";

function Curtain({ duration = 2 }) {
    return (
        <motion.div
            initial={{ translateX: "-200%" }}
            animate={{ translateX: ["-200%", "0%", "200%"] }}
            exit={{ translateX: "200%" }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 inset-0 flex items-center justify-center"
        >
            <div className="w-[200vw] h-[200vh] origin-center bg-my-accent pointer-events-none rotate-12 shrink-0"></div>
        </motion.div>
    );
}

export default Curtain;
