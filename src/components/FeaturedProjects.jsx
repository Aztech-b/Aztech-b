import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import projectsData from "../assets/Projects.js";
import styles from "../styles/featuredProjects.module.css";
import { Divider } from "./Divider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

/**
 * @typedef {Object} props
 * @property {data} data
 * @property {String} alignInfo
 *
 * @typedef {Object} data
 * @property {String} title
 * @property {String} screenshot
 * @property {String} description
 * @property {{code: String, live: String}} links
 * @property {{icon: SVGSVGElement, label: String}[]} chips
 */
const MotionCard = motion.create(Card);
function FeaturedProjects() {
    /** @type {[data]} data */
    const [data, setData] = useState(projectsData[0]);
    const [activeIndex, setActiveIndex] = useState();
    const container = useRef(null);
    // 240 is top-60 of tailwind
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 240px", "end 500px"] });
    const { t } = useTranslation("translation", { keyPrefix: "indexPage.featuredProjects" });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const clampedProgress = Math.min(Math.max(latest, 0), 0.999);
        // At latest = 1.0 (100% scroll): 1.0 * projectsData.length would produce
        // index 2 for a length-2 array, which is out of bounds.
        // Clamping latest to 0.999 keeps the max index at 1.
        const index = Math.floor(clampedProgress * projectsData.length);

        if (projectsData[index] && data !== projectsData[index]) {
            setData(projectsData[index]);
            setActiveIndex(index);
        }
    });

    useEffect(() => {
        projectsData.forEach((project) => {
            const img = new Image();
            img.src = project.screenshot;
        });
    }, []);

    return (
        <div className="content">
            <Divider className={"mt-20"}>{t("header")}</Divider>
            <div className={styles.mainContainer} ref={container}>
                <div className="sticky top-60 flex items-start">
                    <div className={styles.card}>
                        <AnimatePresence mode="wait" initial={false}>
                            <MotionCard
                                key={`${data.title} - card`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.2 }}
                                className={styles.motionCard}
                            >
                                <div>
                                    <CardHeader>
                                        <CardTitle className={styles.cardTitle}>{t(data.title)}</CardTitle>
                                        <CardDescription>{t(data.description)}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.cardContent}>
                                            {data.chips.map((chip, index) => (
                                                <Badge key={index}>
                                                    {chip.icon}
                                                    {chip.label}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className={styles.cardFooter}>
                                        {!data.links ? (
                                            <h2 className="text-center">{t("projects.comingSoon")}</h2>
                                        ) : (
                                            <>
                                                <Button variant="outline" href={data.links.code}>
                                                    GitHub
                                                </Button>
                                                <Button href={data.links.live}>{t("projects.seeItLive")}</Button>
                                            </>
                                        )}
                                    </CardFooter>
                                </div>
                            </MotionCard>
                        </AnimatePresence>
                        <div className={styles.scrollBarContainer}>
                            <motion.div
                                style={{ scaleY: scrollYProgress, originY: 0 }}
                                className={styles.scrollBar}
                            ></motion.div>
                            {projectsData.map((data, index) => (
                                <Mark
                                    key={index}
                                    distanceFromTop={`${(index / projectsData.length) * 100}%`}
                                    isActive={index === activeIndex}
                                ></Mark>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={data.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            className="p-3 flex-3 w-full h-auto"
                        >
                            <img src={data.screenshot} alt="" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function Mark({ distanceFromTop, isActive }) {
    return (
        <motion.div
            animate={{ scaleX: isActive ? 1.5 : 1, scaleY: isActive ? 1.8 : 1 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={styles.mark}
            style={{ top: distanceFromTop }}
        ></motion.div>
    );
}

export default FeaturedProjects;
