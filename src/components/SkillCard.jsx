import { Card, CardContent } from "@/src/components/ui/card";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";

function SkillCard({ labelKey, items }) {
    const { t } = useTranslation();
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2 className="mb-2">{t(labelKey)}</h2>
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
