"use client";

import React from "react";
import { motion } from "framer-motion";

export default function KnowledgeBase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="bg-white  py-8 md:py-16">
      <motion.div
        className="container flex flex-col  2xl:flex-row mx-auto px-4 relative   bg-gradient-to-tr md:bg-gradient-to-tr from-[#353535] to-[#141414] text-white overflow-hidden rounded-3xl p-6 md:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div>
          <motion.p
            className="pb-6 md:pb-12 2xl:pb-[300px] text-center lg:text-left text-sm md:text-xl max-w-2xl"
            variants={textVariants}
          >
            При покупке тариф <span className="font-bold">МАКСИМАЛЬНЫЙ</span>
            <br className="hidden md:inline" /> вы получите доступ в Базу Знаний
          </motion.p>
          <div className="mb-8 md:mb-0">
            <motion.h2
              className="text-5xl md:text-5xl lg:text-8xl text-center lg:text-left  font-semibold mb-4"
              variants={textVariants}
            >
              БАЗА ЗНАНИЙ
            </motion.h2>
            <motion.p
              className="text-md text-center lg:text-left  xl:mb-0 md:mb-10 md:text-xl max-w-[950px]"
              variants={textVariants}
            >
              База знаний Школы Операторов - сборник полезных материалов для
              операторов связи и домофонных компаний, который включает
              накопленный опыт экспертов Школы Операторов и Практики Продаж в
              разных областях развития оператора связи.
            </motion.p>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[450px] 2xl:h-[700px]">
          <div className="flex justify-center md:justify-end absolute -bottom-10 xs:-bottom-12 sm:-bottom-52 md:-bottom-32 lg:-bottom-44 xl:-bottom-64 lg:-right-0  2xl:-right-52">
            <img
              className="w-full scale-[2] xs:scale-[1.8] sm:scale-150 lg:scale-100 "
              src={
                window.screen.width > 1530
                  ? "/knowledge.svg"
                  : "/knowledgesmall.svg  "
              }
              alt="Knowledge Base Illustration"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
