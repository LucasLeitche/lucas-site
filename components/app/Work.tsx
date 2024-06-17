"use client";

import { motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import Link from "next/link";

import Image from "next/image";

import notabrasil from "@/public/assets/notabrasil.png";
import eludico from "@/public/assets/eludico.png";
import lucas from "@/public/assets/lucas.png";

import content from "@/utils/content";
import { LangContext } from "./transition/PageTrasition";

export function WorkApp() {
  const swiperRef = useRef<any | null>(null);
  const lang = useContext(LangContext);

  const projects = [
    {
      num: "01",
      category: content.work[lang][0].title,
      title: content.work[lang][0].title,
      description: content.work[lang][0].description,
      stack: [{ name: "Nuxt" }, { name: "Vue.js" }, { name: "Tailwind" }],
      image: notabrasil,
      live: "https://www.notabrasil.com.br",
      github: "",
    },
    {
      num: "02",
      category: content.work[lang][1].title,
      title: content.work[lang][1].title,
      description: content.work[lang][1].description,
      stack: [
        { name: "Astro" },
        { name: "Vue.js" },
        { name: "Tailwind" },
        { name: "Anime Js" },
      ],
      image: eludico,
      live: "https://www.eludico.com.br",
      github: "",
    },
    {
      num: "03",
      category: content.work[lang][2].title,
      title: content.work[lang][2].title,
      description: content.work[lang][2].description,
      stack: [
        { name: "Next" },
        { name: "React.js" },
        { name: "Tailwind" },
        { name: "Framer Motion" },
      ],
      image: lucas,
      live: "https://lucasleite.online",
      github: "https://github.com/LucasLeitche/lucas-site",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: SwiperClass) {
    console.log(swiper.activeIndex);
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <div className="w-full lg:w-1/ lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-8">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2
                className="text-4xl font-bold leading-nonee text-white group-hover:text-accent 
                transition-all duration-500 captalize"
              >
                {project.category as string}
              </h2>
              <p className="text-white/60 max-h-[150px] overflow-y-auto text-[14px]">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <a className="text-3xl" href={project.live} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group hover:bg-accent
                      hover:text-primary transition-all"
                      >
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                {project.github && (
                  <a className="text-3xl" href={project.github} target="_blank">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center group hover:bg-accent 
                      hover:text-primary transition-all"
                        >
                          <BsGithub />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative ">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 100,
                disableOnInteraction: false,
              }}
              className="h-full max-h-[550px] mb-8"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full flex justify-center">
                  <div
                    className="h-full max-w-[600px] relative group flex justify-center mx-auto lg:mx-0 lg:ml-auto
                    items-center"
                  >
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.description}
                        className="object-cover"
                        style={{ objectPosition: "top center" }}
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-end">
              <div className="flex gap-2 z-20 w-full lg:w-max ">
                <button
                  className="bg-accent text-primary h-10 w-10 rounded-sm flex
                  items-center justify-center text-2xl absolute -left-7 top-[50%] 
                  translate-y-[-50%] lg:static disabled:bg-[lightgray]"
                  onClick={() => swiperRef.current.slidePrev()}
                  disabled={project.num === "01"}
                >
                  {<PiCaretLeftBold className="" />}
                </button>
                <button
                  className="bg-accent text-primary h-10 w-10 rounded-sm flex
                  items-center justify-center text-2xl absolute -right-7 top-[50%] translate-y-[-50%] lg:static disabled:bg-[lightgray]"
                  onClick={() => swiperRef.current.slideNext()}
                  disabled={project.num === `0${projects.length}`}
                >
                  {<PiCaretRightBold className="" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
