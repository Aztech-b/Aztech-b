import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Separator } from "./ui/separator";

/**
 * @typedef {Object} props
 * @property {data} data
 * @property {String} alignInfo
 *
 * @typedef {Object} data
 * @property {String} title
 * @property {String} screenshot
 * @property {String} description
 * @property {{code: String, live: String}} links
 * @property {{icon: SVGSVGElement, label: String}[]} chips
 * @returns
 */

/**
 *
 * @param {props} data
 */
function Project({ data, alignInfo }) {
	console.log(data.screenshot);
	if (alignInfo === null) {
		alignInfo = "right";
	}
	return (
		<>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-x-24 mt-16 mb-24">
				<div className={"relative h-max"}>
					<div className={"absolute inset-0 bg-linear-to-b from-transparent to-black/70"}></div>
					<img src={data.screenshot.src} alt={`screenshot of project ${data.title}`} />
				</div>
				<div className={"flex-1"}>
					<h1 className="text-center mb-0 text-[clamp(1rem,10vw,4rem)]">{data.title}</h1>
					<div className="flex flex-wrap gap-4 align-middle justify-center">
						{data.chips.map((chip, index) => (
							<Badge key={index}>
								{chip.icon}
								{chip.label}
							</Badge>
						))}
					</div>
					<p className="description mt-3">{data.description}</p>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-4 mt-12">
						{!data.links ? (
							<h2 className="text-center">Coming Soon...</h2>
						) : (
							<>
								<Button variant="outline" href={data.links.code}>
									GitHub
								</Button>
								<Button href={data.links.live}>See It Live</Button>
							</>
						)}
					</div>
				</div>
			</div>
			<Separator></Separator>
		</>
	);
}

export default Project;
