import { useEffect } from "react";
import { useLocation } from "react-router";

function useScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            return;
        }

        requestAnimationFrame(() => {
            const element = document.querySelector(hash);

            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }, [hash]);
    return null;
}

export default useScrollToHash;
