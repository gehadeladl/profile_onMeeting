// src/app/I18nProvider.js
"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./../../lib/i18n";

export default function I18nProvider({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = window.localStorage.getItem("onMeetingLang");
    const lang = storedLang || "Ar";

    i18n
      .changeLanguage(lang)
      .then(() => {
        document.documentElement.setAttribute("lang", lang);
        window.localStorage.setItem("onMeetingLang", lang);
        document.documentElement.setAttribute(
          "dir",
          lang === "Ar" ? "rtl" : "ltr"
        );

        document.body.classList.remove("Ar", "En");
        document.body.classList.add(lang);

        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
