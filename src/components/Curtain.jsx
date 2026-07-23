import { motion } from "motion/react";

const Curtain = (OgComponent) => {
    return function CurtainComponent() {
        return (
            <>
                <OgComponent />
                <motion.div
                    initial={{ translateX: "-200vw" }}
                    animate={{ translateX: "0" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed z-40 inset-0 flex items-center justify-center"
                >
                    <div className="w-[200vw] h-[200vh] origin-center bg-my-accent pointer-events-none rotate-12 shrink-0"></div>
                </motion.div>
                <motion.div
                    initial={{ translateX: "0" }}
                    animate={{ translateX: "200vw" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed z-40 inset-0 flex items-center justify-center"
                >
                    <div className="w-[200vw] h-[200vh] origin-center bg-my-accent pointer-events-none rotate-12 shrink-0"></div>
                </motion.div>
            </>
        );
    };
};

export default Curtain;
