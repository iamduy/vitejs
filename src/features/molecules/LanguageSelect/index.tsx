import React from "react";
import { useTranslation } from "@hooks";
import styles from "./index.module.scss";
const LanguageSelect = ({ customColor = false }: ILanguageSelectProps) => {
  const locales: Locales[] = ["en", "jp"];
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang: Locales) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      {locales.map((lang, index) => {
        return (
          <React.Fragment key={index}>
            <span
              className={[
                styles.langItem,
                i18n.language?.includes(lang) && styles.selected,
                customColor && styles.customColor,
              ].join(" ")}
              onClick={() => handleChangeLanguage(lang)}
            >
              {t(lang)}
            </span>

            {index + 1 < locales.length && <span>/</span>}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default LanguageSelect;
interface ILanguageSelectProps {
  customColor?: boolean;
}
type Locales = "en" | "jp";
