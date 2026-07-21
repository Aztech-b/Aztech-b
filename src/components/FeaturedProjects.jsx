import { useEffect, useState } from "react";
import carbonXScreenshot from "../assets/CarbonX.webp";
import messagingAppScreenshot from "../assets/messagingApp.webp";
import { Divider } from "./Divider";
import Project from "./Project";
import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "./globals";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
function FeaturedProjects() {
    /**
     * @type {[data]} data
     */
    const [data, setData] = useState(projectsData[0]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (let i = 0; i < entries.length; i++) {
                    const entry = entries[i];
                    setData(projectsData[i]);
                    console.log("entry " + i);
                    console.log(projectsData[i]);
                }
            },
            { rootMargin: "-50% 0px -50% 0px" },
        );
        const projectCards = document.querySelectorAll(".projectCard");
        projectCards.forEach((projectCard) => observer.observe(projectCard));
        return () => {
            observer.disconnect();
        };
    });
    return (
        <div className="content">
            <Divider className={"mt-20"}>Featured Projects</Divider>
            <div className="p-9 flex items-start">
                <div className="sticky top-60 w-[150%]">
                    <h1 className="text-center mb-0 text-[clamp(1rem,9vw,4rem)]">{data.title}</h1>
                    <div className="flex flex-wrap gap-4 align-middle justify-center">
                        {data.chips.map((chip, index) => (
                            <Badge key={index}>
                                {chip.icon}
                                {chip.label}
                            </Badge>
                        ))}
                    </div>
                    <p>{data.description}</p>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-4 mt-12">
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
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    {projectsData.map((project, index) => (
                        <Project key={index} data={project}></Project>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
