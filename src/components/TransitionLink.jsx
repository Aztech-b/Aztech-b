import { useTransitionContext } from "./App";

function TransitionLink({ to, children }) {
    const { setIsTransitioning, setAddress } = useTransitionContext();

    return (
        <a
            href={to}
            onClick={(e) => {
                e.preventDefault();
                setIsTransitioning(true);
                setAddress(to);
            }}
        >
            {children}
        </a>
    );
}

export default TransitionLink;
