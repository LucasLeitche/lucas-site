"use client";

import style from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "../../ui/button";
import { CiMenuFries, CiSquareRemove } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo";
import ToggleButton from "../Toggle";

import content from "@/utils/content";
import { LanguageEnum, LanguageType } from "@/utils/language-type";

export default function NavApp() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<LanguageType>(LanguageEnum.english);

  function toggleMenu(): void {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }

  const currentPath = usePathname();
  const menuList = [
    {
      label: content.nav[lang][0],
      path: "/",
      isCurrentPath: currentPath === "/",
    },
    {
      label: content.nav[lang][1],
      path: "services",
      isCurrentPath: currentPath === "/services",
    },
    {
      label: content.nav[lang][2],
      path: "resume",
      isCurrentPath: currentPath === "/resume",
    },
    {
      label: content.nav[lang][3],
      path: "work",
      isCurrentPath: currentPath === "/work",
    },
    {
      label: content.nav[lang][4],
      path: "contact",
      isCurrentPath: currentPath === "/contact",
    },
  ];

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
      setLang(LanguageEnum.english);
    } else {
      setLang(LanguageEnum.portuguese);
    }

    return () => {
      window.removeEventListener("languageChanged", updateLanguage);
    };
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:flex gap-10 md:items-center">
        {menuList.map((item, index) => (
          <Link
            key={index}
            className={`hover:text-accent-hover transition-all duration-500 ${
              item.isCurrentPath ? style.active : ""
            }`}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
        <ToggleButton />
        <Button className="bg-accent rounded-3xl text-primary px-6 hover:bg-accent-hover transition-colors">
          {content.nav[lang][5]}
        </Button>
      </nav>

      {/* Mobile nav */}

      <div className="block lg:hidden">
        <div className="flex items-center">
          <ToggleButton />
          <Button
            className="bg-transparent hover:bg-transparent"
            onClick={toggleMenu}
          >
            <CiMenuFries className="text-accent font-bold text-3xl" />
          </Button>
        </div>
        <AnimatePresence>
          {isMenuOpen ? (
            <>
              <motion.div
                initial={{ opacity: "0" }}
                animate={{ opacity: "60%" }}
                exit={{ opacity: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 300,
                }}
              >
                <div className="fixed left-0 top-0 z-10 w-screen h-screen bg-black"></div>
              </motion.div>
              <motion.div
                initial={{ right: "-100%" }}
                animate={{ right: "0%" }}
                exit={{ right: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 25,
                  duration: 300,
                }}
                className="fixed top-0 z-10 bg-primary right-0 flex flex-col items-center justify-around h-full w-9/12 capitalize py-[9rem]"
              >
                <button
                  className="absolute right-5 top-6 text-accent hover:text-accent-hover"
                  onClick={toggleMenu}
                >
                  <CiSquareRemove className="text-5xl" />
                </button>
                <Logo className="text-4xl" />
                <nav className="flex flex-col gap-8 items-center pt-[8rem]">
                  {menuList.map((item, index) => (
                    <Link
                      key={index}
                      className={`text-2xl font-bold hover:text-accent-hover transition-colors ${
                        item.isCurrentPath ? style.active : ""
                      }`}
                      href={item.path}
                      onClick={toggleMenu} // Close the menu when a link is clicked
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-accent hover:bg-accent-hover transition-colors rounded-3xl text-primary px-6 text-lg">
                    {content.nav[lang][5]}
                  </Button>
                </nav>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
