import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

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
    if (alignInfo === null) {
        alignInfo = "right";
    }
    return (
        <Box sx={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr", marginTop: 8, marginBottom: 12 }}>
            <img
                className={alignInfo === "left" ? "order-2" : "order-1"}
                src={data.screenshot}
                alt={`screenshot of project ${data.title}`}
            />
            <Box sx={{ order: alignInfo === "right" ? 2 : 1 }}>
                <h1 className="text-center mb-0">{data.title}</h1>
                <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignContent: "center", justifyContent: "center" }}
                >
                    {data.chips.map((chip, index) => (
                        <Chip
                            sx={{ "& > svg": { padding: 0.4 } }}
                            size="small"
                            key={index}
                            icon={chip.icon}
                            label={chip.label}
                        />
                    ))}
                </Box>
                <p className="description mt-3">{data.description}</p>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
                        gap: 2,
                        marginTop: 6,
                    }}
                >
                    {!data.links ? (
                        <h2 className="text-center">Coming Soon...</h2>
                    ) : (
                        <>
                            <Button variant="outlined" href={data.links.code}>
                                GitHub
                            </Button>
                            <Button variant="contained" href={data.links.live}>
                                See It Live
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default Project;
