"use client";
import { LanguageEnum, LanguageType } from "@/utils/language-type";
import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [lang, setLang] = useState<string>(LanguageEnum.english);

  const toggleLang = () => {
    console.log("1");
    let newLang: LanguageType = LanguageEnum.english;

    if (lang === LanguageEnum.english) {
      newLang = LanguageEnum.portuguese;
    } else {
      newLang = LanguageEnum.english;
    }

    setLang(newLang);
    localStorage.setItem("lang", newLang);

    const event = new CustomEvent("languageChanged", {
      detail: { lang: newLang },
    });

    window.dispatchEvent(event);
  };

  useEffect(() => {

    const langStoraged = localStorage.getItem("lang");

    if (langStoraged === LanguageEnum.english) {
      setLang(LanguageEnum.english);
    } else {
      setLang(LanguageEnum.portuguese);
    }

  }, []);

  return (
    <button
      className={`w-16 h-8 rounded-full bg-gray-300  focus:outline-none ${
        lang === "en" ? "justify-end" : "justify-start"
      }`}
      onClick={toggleLang}
    >
      <span
        className={` ${
          lang === LanguageEnum.portuguese
            ? "to-yellow-400 from-green-400 text-blue-800"
            : "bg-gradient-to-r from-blue-500 to-red-500 text-white"
        } w-8 h-8 rounded-full bg-gradient-to-r uppercase text-primary flex items-center justify-center
         font-semibold shadow-md transform transition-transform duration-300 static ${
           lang === "en" ? "translate-x-full static" : "translate-x-0 static"
         }`}
      >
        {lang}
      </span>
    </button>
  );
};

export default ToggleButton;
