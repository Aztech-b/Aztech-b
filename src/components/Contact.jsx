import { useTranslation } from "react-i18next";
import { Divider } from "./Divider";
import { GitHub, Telegram } from "./globals";

function Contact() {
    const { t } = useTranslation("translation", { keyPrefix: "indexPage.contact" });
    return (
        <div className="content" id="contact">
            <Divider>
                <h2>{t("header")}</h2>
            </Divider>
            <p className="description text-2xl text-center mt-40">
                {t("myEmail")}
                <a
                    className="block text-[#9ca3af] text-[clamp(0.4rem,6vw,3rem)]"
                    href="mailto:bakdaulet.azkhan@proton.me"
                >
                    bakdaulet.azkhan@proton.me
                </a>
            </p>
            <p className="tracking-[0.75rem] text-center text-2xl text-gray-400 mb-10 mt-10">{t("or")}</p>
            <p className="description text-2xl text-center"> {t("reachMe")}</p>
            <div className="flex justify-center gap-8 h-12 mt-4 mb-40">
                <a className={`h-full w-auto shrink-0`} href={Telegram.link}>
                    {Telegram.icon}
                </a>
                <a className={`h-full w-auto shrink-0`} href={GitHub.link}>
                    {GitHub.icon}
                </a>
            </div>
        </div>
    );
}

export default Contact;
