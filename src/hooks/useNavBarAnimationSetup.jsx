import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

function useNavBarAnimationSetup() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious();
        setHidden(diff > 0);
    });
    return { hidden };
}

export default useNavBarAnimationSetup;
