import { useTransitionContext } from "./App";

function TransitionLink({ to, children, ...props }) {
    const { setTargetLocation } = useTransitionContext();

    return (
        <a
            {...props}
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
