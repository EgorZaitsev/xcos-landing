import React from "react";
import { ArrowRight } from "lucide-react";
import KnowledgeBase from "./KnowledgeBase";

const benefits = [
  {
    title: "ОТВЕТЫ НА АКТУАЛЬНЫЕ ВОПРОСЫ",
    description:
      "МКОС создан для того, чтобы обменяться опытом, получить советы и инсайты от профильных специалистов и экспертов на волнующие вопросы маркетинга в сфере телекоммуникаций.",
  },
  {
    title: "НОВЫЕ ЗНАНИЯ И РЕШЕНИЯ",
    description:
      "На протяжении двух дней ведущие эксперты поделятся реальными кейсами и практическими инструментами для B2C и B2B сегмента.",
  },
  {
    title: "ПРАКТИЧЕСКИЕ МАТЕРИАЛЫ",
    description:
      "Доступ к записи докладов спикеров, полезные материалы и инструменты, которые помогут упростить и улучшить работу.",
  },
  {
    title: "ЗАРЯД ЭНЕРГИИ И ВДОХНОВЕНИЕ",
    description:
      "Когда вы поймете как работать с направлением, то у вас появятся силы, чтобы реализовать планы и достигать результатов.",
  },
  {
    title: (
      <>
        ПРИ ПОКУПКЕ ТАРИФА <span className="text-[#141414]">ПРОФИ&quot;</span>{" "}
        ИЛИ <span className="text-[#141414]">МАКСИМАЛЬНЫЙ&quot;</span>
      </>
    ),
    description:
      "Тарифы «Профи» и «Максимальный» предоставляют полный пакет документов, который охватывает все аспекты работы с клиентами: входящие и исходящие потоки, допродажи, удержание и профилактика оттока. Эти решения помогут вам систематизировать процессы и увеличить конверсию.",
  },
];

export default function ParticipantBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl 2xl:w-full md:w-1/2 w-full md:text-5xl font-bold text-gray-900 mr-4">
            ЧТО ПОЛУЧАТ УЧАСТНИКИ
          </h2>
          <div className="hidden lg:block self-end w-full relative">
            <img className="w-full" src="/Arrow.svg" alt="" />
          </div>
        </div>
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border-b-2 border-[#141414] pb-8">
              <h3 className="text-xl font-semibold text-[#0146f9] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        <KnowledgeBase />
      </div>
    </section>
  );
}
