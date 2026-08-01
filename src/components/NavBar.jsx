import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import useNavBarAnimationSetup from "../hooks/useNavBarAnimationSetup";
import { Button } from "./ui/button";
import {
    MotionNavigationMenu,
    MotionNavigationMenuContent,
    MotionNavigationMenuItem,
    MotionNavigationMenuLink,
    MotionNavigationMenuList,
    MotionNavigationMenuTrigger,
} from "./unlumen-ui/motion-navigation-menu";

function NavBar() {
    const { hidden } = useNavBarAnimationSetup();

    return (
        <motion.div
            className="navBar relative"
            animate={{ y: hidden ? "calc(-1 * var(--navbar-height))" : 0, opacity: hidden ? 0 : 1 }}
        >
            <DesktopNavBar className={"md:block hidden"}></DesktopNavBar>
        </motion.div>
    );
}

function MobileNavBar({ className }) {
    return <></>;
}

function DesktopNavBar({ className }) {
    const { t, i18n } = useTranslation("translation", { keyPrefix: "navBar" });
    const contentClassName = "bg-my-accent/10 rounded-lg my-accent-1 my-accent-primary/15";

    return (
        <MotionNavigationMenu
            className={className}
            viewportClassName="bg-card border-none shadow-none"
            springStiffness={350}
            springDamping={32}
        >
            <MotionNavigationMenuList highlightClassName={"bg-my-accent/50 rounded-lg"}>
                <MotionNavigationMenuItem value={"home"}>
                    <MotionNavigationMenuTrigger>{t("home")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <div className="grid grid-cols-3">
                            <MotionNavigationMenuLink to="/">{t("home")}</MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#about">About</MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#toolsAndSkills">
                                Tools & Skills
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#featured-projects">
                                Featured Projects
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#Contact">Contact</MotionNavigationMenuLink>
                        </div>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>
                <MotionNavigationMenuItem value={"my-poems"}>
                    <MotionNavigationMenuTrigger>{t("myPoems")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <MotionNavigationMenuLink className={"whitespace-nowrap"} to={"/my-poems"}>
                            {t("myPoems")}
                        </MotionNavigationMenuLink>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value={"change-language"}>
                    <MotionNavigationMenuTrigger>Change Language</MotionNavigationMenuTrigger>
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
