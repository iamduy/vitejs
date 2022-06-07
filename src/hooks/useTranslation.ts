import { StringMap, TOptions } from "i18next";
import { useTranslation as i18nUseTranslation } from "react-i18next";

export const useTranslation = (nameSpace = "") => {
  const { t: i18nT, ...rest } = i18nUseTranslation(nameSpace);
  return {
    t: (key: string, options?: string | TOptions<StringMap> | undefined) =>
      i18nT<string>(key, options),
    ...rest,
  };
};
