import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);
    return null;
}

export default ScrollToHash;
