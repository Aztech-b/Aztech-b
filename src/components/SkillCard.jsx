import { Box, Card, CardContent } from "@mui/material";
import Icon from "./Icon";

function SkillCard({ label, items }) {
    const defaultSize = 36;
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", maxWidth: 300 }}>
            <h2>{label}</h2>
            <Box sx={{ display: "flex" }}>
                <Card>
                    <CardContent
                        sx={{ padding: 4, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}
                    >
                        {items.map((item, index) => {
                            return <Icon key={index} icon={item.icon} label={item.label}></Icon>;
                        })}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default SkillCard;
