import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Separator } from "./ui/separator";

const textAlignStyle = cva("w-full", {
	variants: {
		textAlign: {
			middle: "grid-cols-[1fr_max-content_1fr]",
			left: "grid-cols-[1fr_max-content_5fr]",
			right: "grid-cols-[5fr_max-content_1fr]",
		},
		hasChildren: { yes: "grid items-center gap-4", no: "" },
	},
});

export function Divider({ className, children, textAlign = "middle" }) {
	const hasChildren = !!children;
	return (
		<div
			className={cn(
				textAlignStyle({
					textAlign,
					hasChildren: hasChildren ? "yes" : "no",
				}),
				className,
				"px-2",
			)}
		>
			{hasChildren ? (
				<>
					<Separator className="h-1! bg-white"></Separator>
					{children}
					<Separator className="h-1! bg-white"></Separator>
				</>
			) : (
				<Separator className="h-1! bg-white"></Separator>
			)}
		</div>
	);
}
