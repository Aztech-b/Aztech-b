import { useTransitionContext } from "./App";

function TransitionLink({ to, children }) {
    const { setTargetLocation } = useTransitionContext();

    return (
        <a
            href={to}
            onClick={(e) => {
                e.preventDefault();
                setTargetLocation(to);
            }}
        >
            {children}
        </a>
    );
}

export default TransitionLink;
