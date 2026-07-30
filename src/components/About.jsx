import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "../styles/about.module.css";
import { Divider } from "./Divider";
import { Badge } from "./ui/badge";

function About() {
    const { t } = useTranslation("translation", { keyPrefix: "indexPage.about" });
    return (
        <section className={`${styles.info} content`} id="about">
            <div className={styles.profile}>
                <User size={"50%"} />
            </div>
            <div>
                <Divider variant="middle" textAlign="left">
                    <h2>{t("header")}</h2>
                </Divider>
                <p className="px-8">
                    <span></span>
                    {t("main")}
                </p>

                <div className={styles.skills}>
                    <h2 className="mt-4 mb-2">{t("Iam")}</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Badge variant="secondary">{t("chips.fullStack")}</Badge>
                        <Badge variant="secondary">{t("chips.frontEnd")}</Badge>
                        <Badge variant="secondary">{t("chips.backEnd")}</Badge>
                        <Badge variant="secondary">{t("chips.gameDev")}</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
