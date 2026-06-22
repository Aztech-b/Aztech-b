import {
    SiCss,
    SiExpress,
    SiFramer,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMantine,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiRailway,
    SiReact,
    SiSocketdotio,
    SiSupabase,
    SiVercel,
    SiWebpack,
} from "@icons-pack/react-simple-icons";
import { Avatar, Box, Card, CardContent, Divider } from "@mui/material";
import { KZ, RU, US } from "country-flag-icons/react/3x2";
import SkillCard from "./SkillCard";

const defaultSize = 36;
const frontendItems = [
    { icon: <SiHtml5 size={defaultSize} />, label: "HTML" },
    { icon: <SiCss size={defaultSize} />, label: "CSS" },
    { icon: <SiJavascript size={defaultSize} />, label: "JavaScript" },
    { icon: <SiReact size={defaultSize} />, label: "React" },
    { icon: <SiMantine size={defaultSize} />, label: "MantineUI" },
    { icon: <SiFramer size={defaultSize} />, label: "Framer Motion" },
];

const backendItems = [
    { icon: <SiNodedotjs size={defaultSize} />, label: "NodeJS" },
    { icon: <SiExpress size={defaultSize} />, label: "Express" },
    { icon: <SiJavascript size={defaultSize} />, label: "JavaScript" },
    { icon: <SiPostgresql size={defaultSize} />, label: "PostgreSQL" },
    { icon: <SiPrisma size={defaultSize} />, label: "Prisma" },
    { icon: <SiSocketdotio size={defaultSize} />, label: "Socket.IO" },
];

const MiscellaneousItems = [
    { icon: <SiGit size={defaultSize} />, label: "git" },
    { icon: <SiGithub size={defaultSize} />, label: "Github" },
    { icon: <SiWebpack size={defaultSize} />, label: "Webpack" },
    { icon: <SiSupabase size={defaultSize} />, label: "Supabase" },
    { icon: <SiRailway size={defaultSize} />, label: "Railway" },
    { icon: <SiVercel size={defaultSize} />, label: "Vercel" },
];

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
