"use client";

import React, { useState, useEffect } from "react";

const benefits = [
  {
    number: "1",
    title: "Объединение профессионалов отрасли",
    image: "/1.png",
  },
  {
    number: "3",
    title: "Обсуждение актуальных\u00a0проблем и решений",
    image: "/3.png",
  },
  {
    number: "2",
    title: "Обмен опытом и\u00a0знаниями",
    image: "/2.png",
  },
];

const Card3D = ({ children, className, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl h-64 text-white cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transition: "transform 0.3s ease",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#404040] to-[#141414]" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-black transition-opacity duration-300 ease-in-out"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="absolute inset-0 opacity-50">
        <img src={image} alt="" className="w-full h-full object-cover " />
      </div>
      <div className="relative z-10 p-6 justify-between flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

const EmptyCard = () => {
  return (
    <div className="bg-[#f1f1f1] rounded-2xl h-64 transition-transform duration-300 ease-in-out hover:scale-105" />
  );
};

export default function ThemeCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridItems = [benefits[0], null, benefits[1], null, benefits[2], null];
  const mobileItems = [benefits[0], benefits[2], benefits[1]];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-fr">
          {gridItems.map((item, index) =>
            item ? (
              <Card3D key={index} image={item.image}>
                <span className="text-4xl font-bold mb-2">{item.number}</span>
                <h3 className="text-xl max-w-[180px] font-semibold mb-2">
                  {item.title}
                </h3>
              </Card3D>
            ) : (
              <EmptyCard key={index} />
            )
          )}
        </div>
        <div className="md:hidden space-y-6">
          {mobileItems.map((benefit, index) => (
            <Card3D key={index} image={benefit.image}>
              <span className="text-4xl font-bold mb-2">{benefit.number}</span>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
