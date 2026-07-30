import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function useTranslationSetup() {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(navigator.language);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}

export default useTranslationSetup;
