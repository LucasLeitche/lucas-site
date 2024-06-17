"use client";

import { LanguageEnum, LanguageType } from "@/utils/language-type";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const LangContext = createContext<LanguageType>(LanguageEnum.english);

export function PageTransition({ children }: any) {
  const [lang, setLang] = useState<LanguageType>(LanguageEnum.english);

  const updateLanguage = () => {
    const langStoraged = localStorage.getItem("lang");
    if (langStoraged === LanguageEnum.english) {
      setLang(LanguageEnum.english);
      localStorage.setItem("lang", LanguageEnum.english);
    } else {
      setLang(LanguageEnum.portuguese);
      localStorage.setItem("lang", LanguageEnum.portuguese);
    }
  };

  useEffect(() => {
    window.addEventListener("languageChanged", updateLanguage);

    const langStoraged = localStorage.getItem("lang");

    if (langStoraged === LanguageEnum.english) {
      console.log("teste");
      setLang(LanguageEnum.english);
    } else {
      setLang(LanguageEnum.portuguese);
    }

    return () => {
      window.removeEventListener("languageChanged", updateLanguage);
    };
  }, []);

  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-10"
        />
      </div>

      <LangContext.Provider value={lang}>{children}</LangContext.Provider>
    </AnimatePresence>
  );
}
