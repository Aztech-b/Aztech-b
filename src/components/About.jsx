import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "../styles/about.module.css";
import { Divider } from "./Divider";
import { Badge } from "./ui/badge";

function About() {
    const { t } = useTranslation();
    return (
        <section className={`${styles.info} content`} id="about">
            <div className={styles.profile}>
                <User size={"50%"} />
            </div>
            <div>
                <Divider variant="middle" textAlign="left">
                    <h2>{t("indexPage.about.header")}</h2>
                </Divider>
                <p className="px-8">
                    <span></span>
                    {t("indexPage.about.main")}
                </p>

                <div className={styles.skills}>
                    <h2 className="mt-4 mb-2">{t("indexPage.about.Iam")}</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Badge variant="secondary">{t("indexPage.about.chips.fullStack")}</Badge>
                        <Badge variant="secondary">{t("indexPage.about.chips.frontEnd")}</Badge>
                        <Badge variant="secondary">{t("indexPage.about.chips.backEnd")}</Badge>
                        <Badge variant="secondary">{t("indexPage.about.chips.gameDev")}</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
