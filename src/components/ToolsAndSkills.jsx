import { Avatar, AvatarFallback, AvatarImage } from "@/src/ui/avatar";
import { Card, CardContent } from "@/src/ui/card";
import { KZ, RU, US } from "country-flag-icons/react/1x1";
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

const defaultSize = 36;

const data = [
	{
		items: [HTML, JS, CSS, React, Vite, Astro, MantineUI, FramerMotion, TailwindCSS],
		label: "Front-end",
	},
	{
		items: [NodeJS, ExpressJS, JS, Prisma, PostgreSQL, SocketIO],
		label: "Back-end",
	},
	{
		items: [git, GitHub, Webpack, Supabase, Railway, Vercel, Cloudflare],
		label: "Miscellaneous",
	},
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
		<div className={"main content"}>
			<Divider className={"mb-8 mt-16"} textAlign="left">
				<h2>Tools & Skills</h2>
			</Divider>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center align-baseline justify-items-center w-full gap-8 px-2">
				{data.map((data, index) => (
					<SkillCard label={data.label} items={data.items} key={index}></SkillCard>
				))}
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Card className={"flex mt-8 justify-center w-max flex-row"}>
					{languages.map((language, index) => {
						return (
							<CardContent className={"flex items-center gap-2"} key={index}>
								{language.label}
								<Avatar className={"w-5 h-5 overflow-hidden"}>
									<AvatarImage src={language.icon}></AvatarImage>
									<AvatarFallback>{language.icon}</AvatarFallback>
								</Avatar>
							</CardContent>
						);
					})}
				</Card>
			</div>
		</div>
	);
}

export default ToolsAndSkills;
