import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import TransitionLink from "./TransitionLink";

function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious();
        setHidden(diff > 0);
    });
    return (
        <motion.div
            className="navBar"
            animate={{ y: hidden ? "calc(-1 * var(--navbar-height))" : 0, opacity: hidden ? 0 : 1 }}
        >
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            {/* <Link to={"/"}>Home</Link> */}
                            <TransitionLink to={"/"}>Home</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            {/* <Link to={"/#contact"}>Contact</Link> */}
                            <TransitionLink to={"/"}>Contact</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            {/* <Link to={"/#about"}>About</Link> */}
                            <TransitionLink to={"/"}>About</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            {/* <Link to="/my-poems">My Poems</Link> */}
                            <TransitionLink to="/my-poems">My Poems</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </motion.div>
    );
}

export default NavBar;
