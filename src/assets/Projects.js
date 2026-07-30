import { Aseprite, FramerMotion, MantineUI, PostgreSQL, React, SocketIO, Unity } from "../components/globals";
import carbonXScreenshot from "./CarbonX.webp";
import messagingAppScreenshot from "./messagingApp.webp";

const data = [
    {
        title: "projects.MessagingApp.title",
        screenshot: messagingAppScreenshot,
        chips: [React, MantineUI, FramerMotion, PostgreSQL, SocketIO],
        description: "projects.MessagingApp.description",
        links: { code: "https://github.com/Aztech-b/MessagingApp", live: "https://messaging-app-opal-one.vercel.app/" },
    },
    {
        title: "projects.CarbonX.title",
        screenshot: carbonXScreenshot,
        chips: [Unity, Aseprite],
        description: "projects.CarbonX.description",
    },
];

export default data;
