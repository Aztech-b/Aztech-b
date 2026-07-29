import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useLayoutEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function HighlighterGroup({ children }) {}

export function Highlighter({
    children,
    action = "highlight",
    color = "var(--my-accent)",
    strokeWidth = 1.5,
    animationDuration = 600,
    iterations = 2,
    padding = 2,
    multiline = true,
    isView = false,
    className,
}) {
    const elementRef = useRef(null);

    const isInView = useInView(elementRef, { once: true, margin: "-10%" });

    // If isView is false, always show. If isView is true, wait for inView
    const shouldShow = !isView || isInView;

    useLayoutEffect(() => {
        const element = elementRef.current;
        let annotation = null;

        if (shouldShow && element) {
            const annotationConfig = {
                type: action,
                color,
                strokeWidth,
                animationDuration,
                iterations,
                padding,
                multiline,
            };

            const currentAnnotation = annotate(element, annotationConfig);
            annotation = currentAnnotation;
            currentAnnotation.show();
        }

        return () => {
            annotation?.remove();
        };
    }, [shouldShow, action, color, strokeWidth, animationDuration, iterations, padding, multiline]);

    return (
        <span ref={elementRef} className={cn(className, "relative bg-transparent")}>
            {children}
        </span>
    );
}
