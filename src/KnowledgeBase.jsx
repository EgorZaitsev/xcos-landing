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
        className="container flex flex-col w-full 2xl:flex-row mx-auto px-4 relative   bg-gradient-to-tr from-[#4a4a4a] to-[#141414] text-white overflow-hidden rounded-3xl p-6 md:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div>
          <motion.p
            className="pb-6 md:pb-12 2xl:pb-[300px] text-center lg:text-left text-lg md:text-xl max-w-2xl"
            variants={textVariants}
          >
            При покупке тариф <span className="font-bold">МАКСИМАЛЬНЫЙ</span>
            <br className="hidden md:inline" /> вы получите доступ в Базу Знаний
          </motion.p>
          <div className="mb-8 md:mb-0">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-8xl text-center lg:text-left  font-semibold mb-4"
              variants={textVariants}
            >
              БАЗА ЗНАНИЙ
            </motion.h2>
            <motion.p
              className="text-md text-center lg:text-left md:text-xl max-w-2xl"
              variants={textVariants}
            >
              База знаний Школы Операторов - сборник полезных материалов для
              операторов связи и домофонных компаний, который включает
              накопленный опыт экспертов Школы Операторов и Практики Продаж в
              разных областях развития оператора связи.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end relative -bottom-24 md:-bottom-32  lg:-right-0  2xl:-right-40 lg:-bottom-24 xl:-bottom-24 ">
          <img
            className="w-full h-full scale-[2] xs:scale-[1.8] sm:scale-150 lg:scale-100"
            src={
              window.screen.width > 1480
                ? "/knowledge.svg"
                : "/knowledgesmall.svg  "
            }
            alt="Knowledge Base Illustration"
          />
        </div>
      </motion.div>
    </div>
  );
}
