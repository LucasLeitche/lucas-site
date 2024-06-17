"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { useContext, useState } from "react";
import { LanguageType } from "@/utils/language-type";
import { LangContext } from "../transition/PageTrasition";
import content from "@/utils/content";

export function ServicesApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [idxHovered, setIdxHovered] = useState(-1);
  const [active, setActive] = useState<number>(-9);

  const lang = useContext<LanguageType>(LangContext);

  const services = [
    {
      num: "01",
      title: content.services[lang][0],
      description: content.services[lang][1],
    },
    {
      num: "02",
      title: content.services[lang][2],
      description: content.services[lang][3],
    },
    {
      num: "03",
      title: content.services[lang][4],
      description: content.services[lang][5],
    },
    {
      num: "04",
      title: content.services[lang][6],
      description: content.services[lang][7],
    },
  ];

  return (
    <div className="flex flex-wrap w-full  gap-[5%] h-full items-start mt-5 mb-20 lg:mt-24 z-0">
      {services.map((item, index) => (
        <div
          key={index}
          className={`w-full lg:w-[45%] border-b border-white/80 shadow-black group cursor-pointer 
            overflow-hidden transition-all duration-500 delay-300
            ${
              active === index
                ? "max-h-[1000px]"
                : "max-h-[190px] lg:max-h-[275px]"
            }`}
          onMouseEnter={() => {
            setIsHovered(true);
            setIdxHovered(index);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIdxHovered(-1);
          }}
          onClick={() => setActive(index)}
        >
          <div className="py-6 lg:py-4 h-full">
            <div className="flex items-center justify-between">
              <strong
                className={`text-4xl lg:text-5xl ${
                  isHovered && idxHovered === index
                    ? "text-outline-hover"
                    : "text-outline"
                } font-extrabold transition-all duration-50 `}
              >
                {item.num}
              </strong>
              <button
                className="w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full bg-white 
                  group-hover:bg-accent 
                  transition-all duration-50 flex justify-center items-center 
                  group-hover:rotate-45 `
                "
              >
                <BsArrowDownRight
                  className="text-primary text-3xl "
                  onClick={() => setActive(index)}
                />
              </button>
            </div>
            <h2 className="font-bold text-4xl h-20 mt-5 lg:mt-8 text-white group-hover:text-accent">
              {item.title}
            </h2>
            <div className="text-white/60 pt-3 h-[270px] overflow-auto relative">
              {item.description}
              <div
                className={`bg-primary h-[69%] w-full absolute bottom-0 transition-all ${
                  active === index + 1 || active === index - 1
                    ? "opacity-1"
                    : "opacity-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
