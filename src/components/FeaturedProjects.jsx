import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import carbonXScreenshot from "../assets/CarbonX.webp";
import messagingAppScreenshot from "../assets/messagingApp.webp";
import { Divider } from "./Divider";
import Project from "./Project";
import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "./globals";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const projectsData = [
    {
        title: "Messaging App",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description:
            "Just a simple messaging app with basic functionality(it is probably not working because of the free plan limitations in PaaS)",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
    {
        title: "CarbonX",
        screenshot: carbonXScreenshot,
        chips: [Unity, Aseprite],
        description: "Game about saving the nature and Carbon Dioxide emission issues in the world",
    },
    {
        title: "Messaging App",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description:
            "Just a simple messaging app with basic functionality(it is probably not working because of the free plan limitations in PaaS)",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
    {
        title: "CarbonX",
        screenshot: carbonXScreenshot,
        chips: [Unity, Aseprite],
        description: "Game about saving the nature and Carbon Dioxide emission issues in the world",
    },
    {
        title: "Messaging App",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description:
            "Just a simple messaging app with basic functionality(it is probably not working because of the free plan limitations in PaaS)",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
];

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
    /**
     * @type {[data]} data
     */
    const [data, setData] = useState(projectsData[0]);
    const container = useRef(null);
    // 240 is top-60 of tailwind
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 240px", "end 500px"] });
    const percentage = 1 / projectsData.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        for (let i = 0; i < projectsData.length; i++) {
            if (data !== projectsData[i] && latest >= percentage * i && latest <= percentage * (i + 1)) {
                setData(projectsData[i]);
                console.log("data changed");
            }
        }
    });

    return (
        <div className="content">
            <Divider className={"mt-20"}>Featured Projects</Divider>
            <div className="p-9 flex items-start gap-4" ref={container}>
                <div className={"sticky top-60 w-[130%] h-full flex gap-5"}>
                    <MotionCard
                        layout
                        transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
                        className={"overflow-hidden flex-1 h-max self-center"}
                    >
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={data.title}
                                layout="position"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-center mb-0 text-[clamp(1rem,4vw,3.5rem)]">
                                        {data.title}
                                    </CardTitle>
                                    <CardDescription>{data.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-4 align-middle justify-center my-5">
                                        {data.chips.map((chip, index) => (
                                            <Badge key={index}>
                                                {chip.icon}
                                                {chip.label}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="grid grid-cols-[repeat(auto-fit,minmax(min-content,1fr))] gap-4">
                                    {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-4 mt-12"> */}
                                    {!data.links ? (
                                        <h2 className="text-center">Coming Soon...</h2>
                                    ) : (
                                        <>
                                            <Button variant="outline" href={data.links.code}>
                                                GitHub
                                            </Button>
                                            <Button href={data.links.live}>See It Live</Button>
                                        </>
                                    )}
                                    {/* </div> */}
                                </CardFooter>
                            </motion.div>
                        </AnimatePresence>
                    </MotionCard>
                    <div className="w-3 h-full relative">
                        <motion.div
                            style={{ scaleY: scrollYProgress, height: "300px", originY: 0 }}
                            className="sticky self-stretch top-60 min-h-full max-h-full w-full bg-amber-400"
                        ></motion.div>
                    </div>
                </div>

                <div className="flex flex-col gap-20 projectsContainer">
                    {projectsData.map((project, index) => (
                        <Project key={index} data={project}></Project>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
