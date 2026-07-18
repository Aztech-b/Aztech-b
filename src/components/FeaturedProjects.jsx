import carbonXScreenshot from "../assets/CarbonX.png";
import messagingAppScreenshot from "../assets/messagingApp.png";
import { Divider } from "./Divider";
import Project from "./Project";
import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "./globals";

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

function FeaturedProjects() {
    return (
        <>
            <div className="content">
                <Divider className={"mt-20"}>Featured Projects</Divider>
                <div className="p-9">
                    {projectsData.map((project, index) => (
                        <Project
                            key={index}
                            alignInfo={((index + 1) & 1) === 0 ? "right" : "left"}
                            data={project}
                        ></Project>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FeaturedProjects;
