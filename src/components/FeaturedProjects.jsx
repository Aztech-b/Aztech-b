import Divider from "@mui/material/Divider";
import messagingAppScreenshot from "../assets/image.png";
import Project from "./Project";
import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "./globals";

const projectsData = [
    {
        title: "Messaging App",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description: "Just a simple messaging app with basic functionality",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
    {
        title: "CarbonX",
        screenshot: messagingAppScreenshot,
        chips: [Unity, Aseprite],
        description: "Game about saving the nature and Carbon Dioxide emission issues in the world",
    },
];

function FeaturedProjects() {
    return (
        <>
            <Divider>Featured Projects</Divider>
            {projectsData.map((project, index) => (
                <Project key={index} alignInfo={((index + 1) & 1) === 0 ? "right" : "left"} data={project}></Project>
            ))}
        </>
    );
}

export default FeaturedProjects;
