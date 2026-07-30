import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/src/components/ui/navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TransitionLink from "./TransitionLink";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const { t, i18n } = useTranslation();

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious();
        setHidden(diff > 0);
    });
    return (
        <motion.div
            className="navBar relative"
            animate={{ y: hidden ? "calc(-1 * var(--navbar-height))" : 0, opacity: hidden ? 0 : 1 }}
        >
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <TransitionLink to="/">{t("navBar.home")}</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <TransitionLink to="/my-poems">{t("navBar.myPoems")}</TransitionLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <DropdownMenu>
                        <DropdownMenuTrigger className={navigationMenuTriggerStyle()}>
                            {t("navBar.language.header")}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    onClick={() => {
                                        i18n.changeLanguage("en");
                                    }}
                                >
                                    {t("navBar.language.en")}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => {
                                        i18n.changeLanguage("ru");
                                    }}
                                >
                                    {t("navBar.language.ru")}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuList>
                <NavigationMenuViewport></NavigationMenuViewport>
            </NavigationMenu>
        </motion.div>
    );
}

export default NavBar;
