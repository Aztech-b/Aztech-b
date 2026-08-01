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
            <DesktopNavBar></DesktopNavBar>
        </motion.div>
    );
}

function DesktopNavBar({ className }) {
    const { t, i18n } = useTranslation();
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
                    <MotionNavigationMenuTrigger>{t("navBar.home")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <div className="grid grid-cols-3">
                            <MotionNavigationMenuLink to="/">{t("navBar.home")}</MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#about">
                                {t("indexPage.about.header")}
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#toolsAndSkills">
                                {t("indexPage.toolsAndSkills.header")}
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink className={"whitespace-nowrap"} to="/#featured-projects">
                                {t("indexPage.featuredProjects.header")}
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink to="/#Contact">
                                {t("indexPage.contact.header")}
                            </MotionNavigationMenuLink>
                        </div>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>
                <MotionNavigationMenuItem value={"my-poems"}>
                    <MotionNavigationMenuTrigger>{t("navBar.myPoems")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <MotionNavigationMenuLink className={"whitespace-nowrap"} to={"/my-poems"}>
                            {t("navBar.myPoems")}
                        </MotionNavigationMenuLink>
                    </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value={"change-language"}>
                    <MotionNavigationMenuTrigger>{t("navBar.language.header")}</MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={contentClassName}>
                        <div className="flex">
                            <MotionNavigationMenuLink asChild={true}>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        i18n.changeLanguage("en");
                                    }}
                                >
                                    {t("navBar.language.en")}
                                </Button>
                            </MotionNavigationMenuLink>
                            <MotionNavigationMenuLink asChild={true}>
                                <Button
                                    variant="ghost"
                                    onClick={() => {
                                        i18n.changeLanguage("ru");
                                    }}
                                >
                                    {t("navBar.language.ru")}
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
