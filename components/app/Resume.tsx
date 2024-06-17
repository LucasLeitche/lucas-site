"use client";

import { useContext, useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaNode,
} from "react-icons/fa";

import { SiNestjs, SiOracle, SiTailwindcss } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { LangContext } from "./transition/PageTrasition";
import content from "@/utils/content";

export function ResumeApp() {
  const [chosedIndex, setChosedIndex] = useState(0);

  const lang = useContext(LangContext);

  const experiences = [
    {
      period: "2020 - 2021",
      role: "Full Stack  jdkçasjdlkas jdaksjlkads",
      company: "Tech solution",
    },
    {
      period: "2020 - 2021",
      role: "Full Stack Developer",
      company: "Tech solution",
    },
    {
      period: "2020 - 2021",
      role: "Full Stack Developer",
      company: "Tech solution",
    },
    {
      period: "2020 - 2021",
      role: "Full Stack Developer",
      company: "Tech solution",
    },
  ];

  const skills = [
    { label: "Javascript", icon: <FaJs /> },
    { label: "Vue", icon: <FaVuejs /> },
    { label: "React", icon: <FaReact /> },
    { label: "Tailwind", icon: <SiTailwindcss /> },
    { label: "Html", icon: <FaHtml5 /> },
    { label: "Css3", icon: <FaCss3 /> },
    { label: "Node", icon: <FaNodeJs /> },
    { label: "Node", icon: <FaNode /> },
    { label: "Nest", icon: <SiNestjs /> },
    { label: "Oracle", icon: <SiOracle /> },
  ];

  const resume = [
    {
      label: content.resume[lang][0].experience[0],
      content: (
        <>
          <h1 className="text-2xl lg:text-4xl mt-8 lg:mt-0 text-center lg:text-left">
            {content.resume[lang][0].experience[1] as string}
          </h1>
          <span className="text-white/70 block mt-8">
            {content.resume[lang][0].experience[2] as string}
          </span>
          <div className="flex flex-col lg:flex-row mt-8 gap-[10%] gap-y-6 flex-wrap ">
            {
              content.resume[lang][0].experience[3].map((item, index) => (
                <div
                  key={index}
                  className="rounded-md bg-[#27272C] shadow shadow-[#27272C] 
                  flex flex-col w-full lg:w-[45%] px-5 py-5 h-[160px] justify-between"
                >
                  <span className="text-accent text-sm">{item.period}</span>
                  <strong className="text-lg lg:text-xl">{item.role}</strong>
                  <ul className="list list-disc text-white/70 marker:text-accent pl-5 ">
                    <li>{item.company}</li>
                  </ul>
                </div>
              ))
            }
          </div>
        </>
      ),
    },
    {
      label: content.resume[lang][0].education[0],
      content: (
        <>
          <h1 className="text-2xl lg:text-4xl mt-8 lg:mt-0 text-center lg:text-left">
            {content.resume[lang][0].education[1] as string}
          </h1>
          <span className="text-white/70 block mt-8">
            {content.resume[lang][0].education[2] as string}
          </span>
          <div className="flex flex-col lg:flex-row mt-8 gap-[10%] gap-y-6 flex-wrap lg:max-h-[360px] py-3 overflow-y-auto">
            {
              content.resume[lang][0].education[3].map((item, index) => (
                <div
                  key={index}
                  className="rounded-md bg-[#27272C] shadow shadow-[#27272C] 
                  flex flex-col w-full lg:w-[45%] px-5 py-5 h-[160px] justify-between"
                >
                  <span className="text-accent text-sm">{item.period}</span>
                  <strong className="text-lg lg:text-xl">{item.course}</strong>
                  <ul className="list list-disc text-white/70 marker:text-accent pl-5 ">
                    <li>{item.school}</li>
                  </ul>
                </div>
              )) as []
            }
          </div>
        </>
      ),
    },
    {
      label: content.resume[lang][0].education[0],
      content: (
        <>
          <h1 className="text-2xl lg:text-4xl mt-8 lg:mt-0 text-center lg:text-left">
            {content.resume[lang][0].education[1] as string}
          </h1>
          <span className="text-white/70 block mt-8">
            {content.resume[lang][0].education[2] as string}
          </span>
          <div className="flex mt-8 gap-7 gap-y-6 flex-wrap">
            {skills.map((item, index) => (
              <TooltipProvider key={index} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    className="rounded-md bg-[#27272C] shadow shadow-[#27272C] 
                  flex flex-col w-full max-w-[80px] lg:max-w-[130px] h-[80px] 
                  lg:h-[130px] items-center justify-center text-4xl lg:text-6xl
                  hover:text-accent"
                  >
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent>{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </>
      ),
    },
    {
      label: content.resume[lang][0].about[0],
      content: (
        <>
          <h1 className="text-2xl lg:text-4xl mt-8 lg:mt-0 text-center lg:text-left">
            {content.resume[lang][0].about[0]}
          </h1>
          <span className="text-white/70 block mt-8">
            {content.resume[lang][0].about[1]}
          </span>
          <div className="w-full max-w-[550px]">
            <div className="flex flex-col lg:flex-row mt-8 justify-between gap-y-6 flex-wrap">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[2]}
                </span>
                <span className="">Lucas Leite</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[3]}
                </span>
                <span className="">(+55) 11 948660920</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-8 justify-between gap-y-6 flex-wrap">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[8]}
                </span>
                <span className="">llneves019@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[6]}
                </span>
                <span className="">{content.resume[lang][0].about[7]}</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-8 justify-between gap-y-6 flex-wrap">
              <div className="flex items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[4]}
                </span>
                <span className="">4+ {content.resume[lang][0].about[5]}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[9]}
                </span>
                <span className="">{content.resume[lang][0].about[10]}</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-8 justify-between gap-y-6 flex-wrap">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[10]}
                </span>
                <span className="">Lucas Leite</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm pr-4">
                  {content.resume[lang][0].about[11]}
                </span>
                <span className="">{content.resume[lang][0].about[12]}</span>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="mt-5 lg:mt-24 flex flex-col lg:flex-row gap-10 lg:gap-20">
      <div className="w-full lg:w-5/12 flex flex-col gap-4 px-5 lg:px-0">
        {resume.map((item, index) => (
          <div
            key={index}
            className={`rounded-md bg-[#27272C] shadow shadow-[#27272C] p-3 font-semiboldd
              text-center cursor-pointer hover:bg-accent hover:text-primary 
              transition-all ${
                index === chosedIndex ? "bg-accent text-primary" : ""
              }`}
            onClick={() => setChosedIndex(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="w-full ">{resume[chosedIndex].content}</div>
    </div>
  );
}
