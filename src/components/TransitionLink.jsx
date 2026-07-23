import { useNavigate } from "react-router";
import { useTransitionContext } from "./App";

function TransitionLink({ to, children }) {
    const { setIsTransitioning, onEnterAnimationEnd } = useTransitionContext();
    const navigate = useNavigate();

    return (
        <a
            href={to}
            onClick={(e) => {
                e.preventDefault();
                setIsTransitioning(true);
                onEnterAnimationEnd(() => {
                    navigate(to);
                });
            }}
        >
            {children}
        </a>
    );
}

export default TransitionLink;
