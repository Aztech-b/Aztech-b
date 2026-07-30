import { useScroll, useTransform } from "motion/react";
import { useMemo } from "react";

function useParallaxBackground() {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300], { clamp: true });
    const isWebGLon = useMemo(() => {
        try {
            const canvas = document.createElement("canvas");
            canvas.id = "webglTestCanvas";
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch {
            return false;
        } finally {
            const canvas = document.querySelector("#webglTestCanvas");
            if (canvas) {
                document.removeChild(canvas);
            }
        }
    }, []);
    return { isWebGLon, bgY };
}

export default useParallaxBackground;
