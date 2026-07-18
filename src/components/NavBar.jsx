import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/src/ui/navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

function NavBar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (current) => {
		const diff = current - scrollY.getPrevious();
		setHidden(diff > 0);
	});
	return (
		<motion.div
			className={"navBar"}
			animate={{
				y: hidden ? "calc(-1 * var(--navbar-height))" : 0,
				opacity: hidden ? 0 : 1,
			}}
		>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
							Contact
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
							About
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
							My Poems
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</motion.div>
	);
}

export default NavBar;
