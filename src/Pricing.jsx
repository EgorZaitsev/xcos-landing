import { CircleCheck, CircleX } from "lucide-react";
import React from "react";

const pricingData = [
  {
    name: "МИНИ",
    duration: "Участие в программе 1 день",
    features: [
      { name: "Записи докладов дня участия", included: true },
      { name: "Пакет документации", included: false },
      { name: "Доступ в Базу Знаний", included: false },
    ],
    price: "10 000 руб.",
  },
  {
    name: "СТАНДАРТ",
    duration: "Участие в программе 2 дня",
    features: [
      { name: "Записи всех докладов конференции", included: true },
      { name: "Пакет документации", included: false },
      { name: "Доступ в Базу Знаний", included: false },
    ],
    price: "17 000 руб.",
  },
  {
    name: "ПРОФИ",
    duration: "Участие в программе 2 дня",
    features: [
      { name: "Записи всех докладов конференции", included: true },
      { name: "Пакет документации", included: true },
      { name: "Доступ в Базу Знаний", included: false },
    ],
    price: "35 000 руб.",
    featured: true,
  },
  {
    name: "МАКСИМАЛЬНЫЙ",
    duration: "Участие в программе 2 дня",
    features: [
      { name: "Записи всех докладов конференции", included: true },
      { name: "Пакет документации", included: true },
      { name: "Доступ в Базу Знаний", included: true },
    ],
    price: "70 000 руб.",
    note: "С возможностью рассрочки",
  },
];

export default function PricingCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {pricingData.map((plan, index) => (
        <div
          key={index}
          className={`w-72 p-6 rounded-3xl ${
            plan.featured
              ? "bg-gradient-to-br from-[#001c66] to-[#0146f9] text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          <h3
            className={`text-xl font-bold mb-1 ${
              plan.featured ? "text-white" : "text-blue-600"
            }`}
          >
            {plan.name}
          </h3>
          <p className="text-sm mb-6">{plan.duration}</p>
          <ul className="space-y-4 mb-6">
            {plan.features.map((feature, featureIndex) => (
              <>
                <li key={featureIndex} className="flex items-center">
                  <div className="flex-grow">
                    <span className={`text-sm `}>{feature.name}</span>
                  </div>
                  <div className="flex-shrink-0  justify-center items-center">
                    {feature.included ? (
                      <CircleCheck
                        color={`${!plan.featured ? "#0146f9" : "white"} `}
                      />
                    ) : (
                      <CircleX
                        opacity={!plan.featured ? "100%" : "25%"}
                        color="#c7c7c7"
                      />
                    )}
                  </div>
                </li>
                <div
                  className={`border-b  ${
                    plan.featured ? "border-white" : "border-black"
                  } my-2`}
                ></div>
              </>
            ))}
          </ul>
          <div className="text-2xl font-bold mb-2">{plan.price}</div>
          {plan.note && <p className="text-xs text-gray-500">{plan.note}</p>}
        </div>
      ))}
    </div>
  );
}
