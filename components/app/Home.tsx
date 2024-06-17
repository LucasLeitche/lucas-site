"use client";
import { Social } from "./Social";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";
import { Photo } from "./Photo";
import { InfoBar } from "./Inforbar";
import { useContext, useState } from "react";
import { LangContext } from "./transition/PageTrasition";
import content from "@/utils/content";
import { LanguageType } from "@/utils/language-type";
import { CvModal } from "../CvModal";

/* eslint-disable react/no-unescaped-entities */
export function HomeApp() {
  const lang = useContext<LanguageType>(LangContext);
  const [isOpen, setIsOpen] = useState(false);

  function close(): void {
    setIsOpen(false);
  }
  function open(): void {
    setIsOpen(true);
  }
  function downloadCv(event: Event){
    console.log(event)
    close()
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col order-2 lg:order-none items-center text-center lg:text-left lg:items-start lg:w-1/2">
          <span className="text-xl">{content.home[lang][0]}</span>
          <h1 className="text-5xl font-semibold lg:text-7xl pt-3 leading-none max-w-[400px] lg:max-w-[500px]">
            {content.home[lang][1]}
            <span className="text-[#03FF99]"> Lucas Leite</span>
          </h1>
          <span className="max-w-[500px] text-white/70 pt-8">
            {content.home[lang][2]}
          </span>
          <div className="flex flex-col lg:flex-row items-center gap-10 pt-10">
            <Button
              className="border-accent border-[.1px] text-[1.1rem]  
            shadow-accent hover:bg-accent-hover hover:text-primary hover:font-normal 
              transition-all bg-transparent rounded-3xl p-6 text-[#03FF99]"
              onClick={open}
            >
              <span className="pr-2">Donwload CV</span>{" "}
              <FiDownload></FiDownload>
            </Button>
            <Social />
          </div>
        </div>
        <div className="order-0 lg:order-none mb-8 xl:mb-8">
          <Photo />
        </div>
      </div>
      <InfoBar />
      {isOpen && <CvModal close={close} chosed={downloadCv}/>}
    </div>
  );
}
