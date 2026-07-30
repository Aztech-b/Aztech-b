import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "../components/globals";
import carbonXScreenshot from "./CarbonX.webp";
import messagingAppScreenshot from "./messagingApp.webp";

const data = [
    {
        title: "indexPage.featuredProjects.projects.MessagingApp.title",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description: "indexPage.featuredProjects.projects.MessagingApp.description",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
    {
        title: "indexPage.featuredProjects.projects.CarbonX.title",
        screenshot: carbonXScreenshot,
        chips: [Unity, Aseprite],
        description: "indexPage.featuredProjects.projects.CarbonX.description",
    },
];

export default data;
