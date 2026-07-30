import { useTranslation } from "react-i18next";
import { Divider } from "./Divider";
function Footer() {
    const { t } = useTranslation();
    return (
        <div className="content">
            <Divider className="mb-20 mt-14"></Divider>
            <p className="description text-center text-[1rem] mb-5">{t("footer")}</p>
        </div>
    );
}

export default Footer;
