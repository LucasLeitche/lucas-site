"use client";

import { BsArrowDownRight } from "react-icons/bs";
import servicesJson from "./utils/services.json";
import { useState } from "react";

const services = servicesJson;

const language = "en";

export function ServicesApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [idxHovered, setIdxHovered] = useState(-1);

  return (
    <div className="flex flex-wrap w-full gap-[5%] h-full items-center mt-5 lg:mt-24 z-0">
      {services.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-[45%] border-b border-white/80 shadow-black group cursor-pointer"
          onMouseEnter={() => {
            setIsHovered(true);
            setIdxHovered(index);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIdxHovered(-1);
          }}
        >
          <div className="py-6 lg:py-4">
            <div className="flex items-center justify-between">
              <strong
                className={`text-5xl ${
                  isHovered && idxHovered === index
                    ? "text-outline-hover"
                    : "text-outline"
                } font-extrabold transition-all duration-50`}
              >
                {item.num}
              </strong>
              <button
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
              transition-all duration-50 flex justify-center items-center group-hover:rotate-45"
              >
                <BsArrowDownRight className="text-primary text-3xl" />
              </button>
            </div>
            <h2 className="font-bold text-4xl mt-5 lg:mt-8 text-white group-hover:text-accent">
              {item.title}
            </h2>
            <p className="text-white/60 pt-3">{item.description[language]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
