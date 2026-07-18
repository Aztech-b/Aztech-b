import { Card, CardContent } from "@/components/ui/card";
import Icon from "./Icon";

function SkillCard({ label, items }) {
    const defaultSize = 36;
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2 className="mb-2">{label}</h2>
            <div className="flex">
                <Card className={"h-min"}>
                    <CardContent className={"p-8 flex flex-wrap justify-center gap-8"}>
                        {items.map((item, index) => {
                            return <Icon key={index} icon={item.icon} label={item.label}></Icon>;
                        })}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default SkillCard;
