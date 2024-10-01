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
];

export default function ParticipantBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mr-4">
            ЧТО ПОЛУЧАТ УЧАСТНИКИ
          </h2>
          <div className="flex-grow self-end mb-px h-[2px] bg-[#131313] relative">
            <svg
              className="absolute hidden md:block right-1 top-1/2 transform translate-x-full -translate-y-1/2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10H18M18 10L10 2M18 10L10 18"
                stroke="#131313"
                strokeWidth="1.9"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="border-b-2 border-[#131313] pb-8">
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
