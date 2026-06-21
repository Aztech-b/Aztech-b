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
import { Box, Divider } from "@mui/material";
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

function ToolsAndSkills() {
    const defaultSize = 36;
    return (
        <>
            <div className="main">
                <Divider textAlign="left">
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
            </div>
        </>
    );
}

export default ToolsAndSkills;
