import React from "react";
import "./App.css";

export default function DayAgenda({ agendaItems, day }) {
  return (
    <section className="bg-[#141414] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center mb-16 gap-7">
          <h2 className="text-3xl md:text-6xl font-bold ">{day.day}</h2>
          <p className="text-xl md:text-2xl w-[600px] ">{day.desc}</p>
        </div>
        <CustomBackground className="container">
          <div className="flex justify-center items-center xl:items-start h-full container 2xl:h-[650px] xl:pt-6 2xl:pt-14 flex-col xl:flex-row 2xl:gap-10 pr-10 ">
            {agendaItems.map((item, index) => (
              <div
                key={item.number}
                className={`relative w-full border-r-2 2xl:w-[290px] border-[#6a6a6a]  mb-14 xl:mb-0 ${
                  index % 2 !== 0
                    ? "xl:mt-28 xl:h-[350px] 2xl:h-[400px]"
                    : "xl:h-[3070px] 2xl:h-[400px]"
                }`}
              >
                <div className=" text-right text-[#0146f9] pr-14 pb-[38px] border-r-[11px] border-[#333]  text-5xl md:text-[101px] font-bold text-blue text-stroke ">
                  {item.number}
                </div>
                <div className=" pl-4 pt-2">
                  <h3 className="text-lg pr-6 md:text-xl text-[#0146f9] pb-3 text-right font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm  pr-6 md:text-base text-right text-gray-400">
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
    <div className={`relative mt-24  ${className}`}>
      <img
        className="w-full md:hidden xl:block absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        src="/Union.svg"
        alt=""
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
