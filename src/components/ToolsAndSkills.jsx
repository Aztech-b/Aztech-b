import { Avatar, Box, Card, CardContent, Divider } from "@mui/material";
import { KZ, RU, US } from "country-flag-icons/react/1x1";
import SkillCard from "./SkillCard";
import {
    Aseprite,
    Cloudflare,
    CSS,
    ExpressJS,
    FramerMotion,
    git,
    GitHub,
    HTML,
    JS,
    MantineUI,
    NodeJS,
    PostgreSQL,
    Prisma,
    Railway,
    React,
    SocketIO,
    Supabase,
    TailwindCSS,
    Unity,
    Vercel,
    Webpack,
} from "./globals";

const defaultSize = 36;

const data = [
    { items: [HTML, JS, CSS, TailwindCSS, React, MantineUI, FramerMotion], label: "Front-end" },
    { items: [NodeJS, ExpressJS, JS, Prisma, PostgreSQL, SocketIO], label: "Back-end" },
    { items: [git, GitHub, Webpack, Supabase, Railway, Vercel, Cloudflare], label: "Miscellaneous" },
    { items: [Unity, Aseprite], label: "Game Development" },
];

const languages = [
    { icon: <US></US>, label: "I speak English" },
    { icon: <RU></RU>, label: "Я говорю по Русский" },
    { icon: <KZ></KZ>, label: "Мен Қазақша сөйлеймін" },
];

function ToolsAndSkills() {
    const defaultSize = 36;
    return (
        <>
            <div className={"main"}>
                <Divider sx={{ marginBottom: 4, marginTop: 8 }} textAlign="left">
                    <h2>Tools & Skills</h2>
                </Divider>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        justifyContent: "center",
                        alignItems: "start",
                        justifyItems: "center",
                        width: "100%",
                        gap: 4,
                    }}
                >
                    {data.map((data, index) => (
                        <SkillCard label={data.label} items={data.items} key={index}></SkillCard>
                    ))}
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card sx={{ display: "flex", marginTop: 4, justifyContent: "center", width: "max-content" }}>
                        {languages.map((language, index) => {
                            return (
                                <CardContent key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    {language.label}
                                    <Avatar sx={{ width: 24, height: 24 }}>{language.icon}</Avatar>
                                </CardContent>
                            );
                        })}
                    </Card>
                </div>
            </div>
        </>
    );
}

export default ToolsAndSkills;
