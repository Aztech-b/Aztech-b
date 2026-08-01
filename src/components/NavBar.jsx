import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import useNavBarAnimationSetup from "../hooks/useNavBarAnimationSetup";
import NavBarLinkDescription from "./NavBarLinkDescription";
import { Button } from "./ui/button";
import {
    MotionNavigationMenu,
    MotionNavigationMenuContent,
    MotionNavigationMenuItem,
    MotionNavigationMenuLink,
    MotionNavigationMenuList,
    MotionNavigationMenuTrigger,
    motionNavigationMenuTriggerStyle,
} from "./unlumen-ui/motion-navigation-menu";

function NavBar() {
    const { hidden } = useNavBarAnimationSetup();

    return (
        <motion.div
            className="navBar relative"
            animate={{ y: hidden ? "calc(-1 * var(--navbar-height))" : 0, opacity: hidden ? 0 : 1 }}
        >
            <DesktopNavBar></DesktopNavBar>
        </motion.div>
    );
}

function DesktopNavBar({ className }) {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "navBar" });
    const contentClassName = "highlight";
    // "bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--highlight-bg),rgb(white/0.5) 90%),var(--highlight-bg))]";
    // "bg-my-accent/10 rounded-lg my-accent-1 my-accent-primary/15";

    return (
        <MotionNavigationMenu
            className={className}
            viewportClassName="bg-card border-none shadow-none"
            springStiffness={350}
            springDamping={32}
        >
            <MotionNavigationMenuList highlightClassName={"bg-my-accent/10 rounded-lg"}>
                <MotionNavigationMenuItem value={"home"}>
                    <MotionNavigationMenuTrigger>{t("home.header")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <div className="grid grid-cols-3">
                            <MotionNavigationMenuLink to="/">
                                <NavBarLinkDescription title={t("home.home.header")}>{t("")}</NavBarLinkDescription>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#about">
                                <NavBarLinkDescription title={t("home.about.header")}>
                                    {t("home.about.description")}
                                </NavBarLinkDescription>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#toolsAndSkills">
                                <NavBarLinkDescription title={t("home.toolsAndSkills.header")}>
                                    {t("home.toolsAndSkills.description")}
                                </NavBarLinkDescription>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#featured-projects">
                                <NavBarLinkDescription title={t("home.featuredProjects.header")}>
                                    {t("home.featuredProjects.description")}
                                </NavBarLinkDescription>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#contact">
                                <NavBarLinkDescription title={t("home.contact.header")}>
                                    {t("home.contact.description")}
                                </NavBarLinkDescription>
                            </MotionNavigationMenuLink>
                        </div>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>
                <MotionNavigationMenuItem value={"my-poems"}>
                    <MotionNavigationMenuLink
                        className={cn("whitespace-nowrap", motionNavigationMenuTriggerStyle())}
                        to={"/my-poems"}
                    >
                        {t("myPoems")}
                    </MotionNavigationMenuLink>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value={"change-language"}>
                    <MotionNavigationMenuTrigger>{t("language.header")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <div className="flex">
                            <MotionNavigationMenuLink asChild={true}>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        i18n.changeLanguage("en");
                                    }}
                                >
                                    {t("language.en")}
                                </Button>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink asChild={true}>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        i18n.changeLanguage("ru");
                                    }}
                                >
                                    {t("language.ru")}
                                </Button>
                            </MotionNavigationMenuLink>
                        </div>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>
            </MotionNavigationMenuList>
        </MotionNavigationMenu>
    );
}

export default NavBar;
