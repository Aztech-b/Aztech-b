import { Avatar, Box, Card, CardContent, Divider } from "@mui/material";
import { KZ, RU, US } from "country-flag-icons/react/3x2";
import SkillCard from "./SkillCard";
import {
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
    Vercel,
    Webpack,
} from "./globals";

const defaultSize = 36;
const frontendItems = [HTML, CSS, JS, React, TailwindCSS, MantineUI, FramerMotion];

const backendItems = [NodeJS, ExpressJS, JS, PostgreSQL, Prisma, SocketIO];

const MiscellaneousItems = [git, GitHub, Webpack, Supabase, Railway, Vercel];

const languages = [
    { icon: <US style={{ scale: 1.5 }}></US>, label: "I speak English" },
    { icon: <RU style={{ scale: 1.5 }}></RU>, label: "Я говорю по Русский" },
    { icon: <KZ style={{ scale: 1.5 }}></KZ>, label: "Мен Қазақша сөйлеймін" },
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
                        gridTemplateColumns: "repeat(3, 1fr)",
                        justifyContent: "center",
                        alignItems: "center",
                        justifyItems: "center",
                    }}
                >
                    <SkillCard label={"Front-end"} items={frontendItems}></SkillCard>
                    <SkillCard label={"Back-end"} items={backendItems}></SkillCard>
                    <SkillCard label={"Miscellaneous"} items={MiscellaneousItems}></SkillCard>
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
