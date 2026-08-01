import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { KZ, RU, US } from "country-flag-icons/react/1x1";
import { useTranslation } from "react-i18next";
import { Divider } from "./Divider";
import SkillCard from "./SkillCard";
import {
    Aseprite,
    Astro,
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
    Vite,
    Webpack,
} from "./globals";
import { Card, CardContent } from "./ui/card";

const data = [
    {
        items: [HTML, JS, CSS, React, Vite, Astro, MantineUI, FramerMotion, TailwindCSS],
        labelKey: "indexPage.toolsAndSkills.skillCardLabel.frontEnd", // this is for l10n
    },
    {
        items: [NodeJS, ExpressJS, JS, Prisma, PostgreSQL, SocketIO],
        labelKey: "indexPage.toolsAndSkills.skillCardLabel.backEnd",
    },
    {
        items: [git, GitHub, Webpack, Supabase, Railway, Vercel, Cloudflare],
        labelKey: "indexPage.toolsAndSkills.skillCardLabel.miscellaneous",
    },
    { items: [Unity, Aseprite], labelKey: "indexPage.toolsAndSkills.skillCardLabel.gameDev" },
];

const languages = [
    { icon: <US></US>, label: "I speak English" },
    { icon: <RU></RU>, label: "Я говорю по Русский" },
    { icon: <KZ></KZ>, label: "Мен Қазақша сөйлеймін" },
];

function ToolsAndSkills() {
    const { t } = useTranslation();
    return (
        <div className={"main content px-2"} id="toolsAndSkills">
            <Divider className={"mb-8 mt-16"} textAlign="left">
                <h2>{t("indexPage.toolsAndSkills.header")}</h2>
            </Divider>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center align-baseline justify-items-center w-full gap-8">
                {data.map((data, index) => (
                    <SkillCard labelKey={data.labelKey} items={data.items} key={index}></SkillCard>
                ))}
            </div>
            <div className="flex justify-center">
                <Card className={"mt-8 justify-center max-w-max w-fit flex flex-row flex-wrap"}>
                    {languages.map((language, index) => (
                        <CardContent className={"flex items-center gap-2"} key={index}>
                            {language.label}
                            <Avatar className={"w-5 h-5 overflow-hidden"}>
                                <AvatarImage src={language.icon}></AvatarImage>
                                <AvatarFallback>{language.icon}</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    ))}
                </Card>
            </div>
        </div>
    );
}

export default ToolsAndSkills;
