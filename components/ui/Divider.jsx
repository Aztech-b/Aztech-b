import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Separator } from "./separator";

const textAlignStyle = cva("grid items-center gap-4 ", {
    variants: {
        textAlign: {
            middle: "grid-cols-[1fr_min-content_1fr]",
            left: "grid-cols-[1fr_min-content_5fr]",
            right: "grid-cols-[5fr_min-content_1fr]",
        },
    },
});

export function Divider({ className, children, textAlign = "middle" }) {
    return (
        <>
            <div className={cn(textAlignStyle({ textAlign }), className)}>
                <Separator className="!h-1 bg-white"></Separator>
                {children}
                <Separator className="!h-1 bg-white"></Separator>
            </div>
        </>
    );
}
