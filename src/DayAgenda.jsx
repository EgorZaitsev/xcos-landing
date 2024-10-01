import React from "react";
import "./App.css";

export default function DayAgenda({ agendaItems, day }) {
  return (
    <section className="bg-[#141414] text-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {day.day}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-[600px]">
            {day.desc}
          </p>
        </div>
        <CustomBackground className="container">
          <div className="flex justify-center items-center xl:items-start h-full container xl:h-[550px] 2xl:h-[650px] pt-6 xl:pt-14 flex-col xl:flex-row gap-8 xl:gap-4 2xl:gap-10 pr-4 xl:pr-10">
            {agendaItems.map((item, index) => (
              <div
                key={item.number}
                className={`relative w-full xl:w-1/5 2xl:w-[290px] border-b-2 xl:border-b-0 xl:border-r-2 border-[#6a6a6a] pb-8 xl:pb-0 mb-8 xl:mb-0 ${
                  index % 2 !== 0
                    ? "xl:mt-28 xl:h-[350px] 2xl:h-[400px]"
                    : "xl:h-[370px] 2xl:h-[400px]"
                }`}
              >
                <div className="flex items-end justify-end pr-4 md:pl-10 md:pr-4 pb-4 sm:pb-[38px] border-r-[6px] sm:border-r-[11px] border-[#333]  ">
                  <img src={`/n${item.number}.svg`} alt="" />
                </div>
                <div className="pl-4 pt-2">
                  <h3 className="text-base sm:text-lg md:text-xl text-[#0146f9] pb-2 sm:pb-3 text-left xl:text-right font-bold mb-2 pr-0 xl:pr-6">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-left xl:text-right text-gray-400 pr-0 xl:pr-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CustomBackground>
      </div>
    </section>
  );
}

function CustomBackground({ children, className = "" }) {
  return (
    <div className={`relative mt-8 sm:mt-12 md:mt-16 lg:mt-24 ${className}`}>
      <img
        className="w-full hidden xl:block absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        src="/Union.svg"
        alt=""
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
