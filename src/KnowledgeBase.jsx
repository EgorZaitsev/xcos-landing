"use client";

import React from "react";
import { motion } from "framer-motion";

const plates = [
  { id: 1, content: "Запуск новых направлений", color: "#4B4B4B", rotate: -5 },
  {
    id: 2,
    content: "Продажа через технических специалистов",
    color: "#808080",
    rotate: 3,
  },
  {
    id: 3,
    content: "Развитие Умных сервисов и IP-домофонии",
    color: "#0146F9",
    rotate: -2,
  },
  {
    id: 4,
    content: "Стратегия развития оператора связи",
    color: "#4B4B4B",
    rotate: 4,
  },
  { id: 5, content: "Продажа IPTV", color: "#0146F9", rotate: -3 },
  { id: 6, content: "Подготовка к M&A", color: "#808080", rotate: 2 },
  { id: 7, content: "Индексация", color: "#4B4B4B", rotate: -4 },
  {
    id: 8,
    content: "Развитие Контактного центра",
    color: "#0146F9",
    rotate: 3,
  },
  { id: 9, content: "Монетизация", color: "#808080", rotate: -2 },
  { id: 10, content: "Работа с оттоком", color: "#808080", rotate: 4 },
];

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

  const plateVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: plates[i].rotate,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: i * 0.1,
      },
    }),
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
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-black text-white overflow-hidden rounded-3xl p-6 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.p
            className="pb-12 md:pb-[300px] text-sm md:text-base max-w-2xl"
            variants={textVariants}
          >
            При покупке тариф <span className="font-bold">МАКСИМАЛЬНЫЙ</span>
            <br /> вы получите доступ в Базу Знаний
          </motion.p>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2
              className="text-3xl md:text-6xl font-bold mb-4"
              variants={textVariants}
            >
              БАЗА ЗНАНИЙ
            </motion.h2>
            <motion.p
              className="text-sm md:text-base max-w-2xl"
              variants={textVariants}
            >
              База знаний Школы Операторов - сборник полезных материалов для
              операторов связи и домофонных компаний, который включает
              накопленный опыт экспертов Школы Операторов и Практики Продаж в
              разных областях развития оператора связи.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-wrap my-4 justify-center md:justify-end md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2"
            variants={containerVariants}
          >
            {plates.map((plate, index) => (
              <motion.div
                key={plate.id}
                className="flex items-center justify-center  px-4 m-2  rounded-full h-14 md:h-20 text-sm md:text-base font-medium "
                style={{ backgroundColor: plate.color }}
                variants={plateVariants}
                custom={index}
              >
                <span className="text-center">{plate.content}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
