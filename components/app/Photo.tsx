"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import photo from "../public/assets/photo.png";

export function Photo() {
  return (
    <div className="h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-full h-full"
        >
          <div
            className="w-[280px] h-[280px] border-4 border-transparent lg:w-[470px] xl:w-[520px] lg:h-[460px] 
              xl:h-[550px] xl:ml-[40px] top-5 lg:top-5 xl:top-7 left-3 lg:left-[18px] xl:left-1 
              overflow-hidden rounded-full absolute"
          >
            <Image
              src="/assets/IMG_4515 2.jpg"
              priority
              quality={100}
              fill
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[506px] xl:w-[606px] h-[320px] lg:h-[506px] xl:h-[606px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
