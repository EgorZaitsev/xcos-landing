import React from "react";
import "./App.css";

export default function DayAgenda({ agendaItems, day }) {
  return (
    <section className="bg-[#141414] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center mb-16 gap-7">
          <h2 className="text-9xl md:text-5xl font-bold ">{day.day}</h2>
          <p className="text-xl md:text-2xl w-[600px] ">{day.desc}</p>
        </div>
        <CustomBackground className="">
          <div className="flex h-[550px] w-full flex-col md:flex-row md:space-x-4 lg:space-x-8">
            {agendaItems.map((item, index) => (
              <div
                key={item.number}
                className={`relative border-r-2 border-[#6a6a6a] flex-1 right-2 mb-8 md:mb-0 ${
                  index % 2 !== 0 ? "md:mt-24 h-[400px]" : "h-[400px]"
                }`}
                //box-shadow: -5px 0px 0px 0px black
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
    <div className={`relative pt-12 px-[22px] ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 936 394"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 33C0 14.7746 14.7746 0 33 0H149C167.225 0 182 14.7746 182 33V47C182 51.4183 185.582 55 190 55H357C361.418 55 365 51.4183 365 47V33C365 14.7746 379.775 0 398 0H528C546.225 0 561 14.7746 561 33V47C561 51.4183 564.582 55 569 55H729C733.418 55 737 51.4183 737 47V33C737 14.7746 751.775 0 770 0H903C921.225 0 936 14.7746 936 33V306C936 324.225 921.225 339 903 339H751C746.582 339 743 342.582 743 347V361C743 379.225 728.225 394 710 394H577C558.775 394 544 379.225 544 361V347C544 342.582 540.418 339 536 339H382C377.582 339 374 342.582 374 347V361C374 379.225 359.225 394 341 394H208C189.775 394 175 379.225 175 361V347C175 342.582 171.418 339 167 339H33C14.7746 339 0 324.225 0 306V33Z"
          fill="#1A1A1A"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
