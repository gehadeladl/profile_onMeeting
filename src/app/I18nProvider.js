// src/app/I18nProvider.js
"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

export default function I18nProvider({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lang =
      window.localStorage.getItem("onMeetingLang") || i18n.language || "ar";

    i18n.changeLanguage(lang).catch(() => {});

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.body.classList.remove("ar", "en");
    document.body.classList.add(lang);

    setReady(true);
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
