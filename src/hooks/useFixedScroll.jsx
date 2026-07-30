import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import projectsData from "../assets/Projects.js";

function useFixedScroll(container) {
    /** @type {[data]} data */
    const [data, setData] = useState(projectsData[0]);
    const [activeIndex, setActiveIndex] = useState();

    // 240 is top-60 of tailwind
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 240px", "end 500px"] });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const clampedProgress = Math.min(Math.max(latest, 0), 0.999);
        // At latest = 1.0 (100% scroll): 1.0 * projectsData.length would produce
        // index 2 for a length-2 array, which is out of bounds.
        // Clamping latest to 0.999 keeps the max index at 1.
        const index = Math.floor(clampedProgress * projectsData.length);

        if (projectsData[index] && data !== projectsData[index]) {
            setData(projectsData[index]);
            setActiveIndex(index);
        }
    });

    useEffect(() => {
        projectsData.forEach((project) => {
            const img = new Image();
            img.src = project.screenshot;
        });
    }, []);

    return { data, scrollYProgress, activeIndex };
}

export default useFixedScroll;
