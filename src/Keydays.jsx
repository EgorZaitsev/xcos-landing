import React from "react";

export default function KeyThemes() {
  return (
    <section className="bg-[#141414] rounded-t-[30px] text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] md:leading-[140%] lg:leading-[140%] mb-6">
              КЛЮЧЕВЫЕ ТЕМЫ КОНФЕРЕНЦИИ
            </h2>
            <p className="text-lg md:text-xl max-w-lg">
              МКОС создан для того, чтобы обменяться опытом, получить советы и
              инсайты от профильных специалистов и экспертов на волнующие
              вопросы маркетинга в сфере телекоммуникаций
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square">
              <img
                src="/two.png"
                alt="Конференция: 6-7 ноября, более 20 тем выступлений"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
