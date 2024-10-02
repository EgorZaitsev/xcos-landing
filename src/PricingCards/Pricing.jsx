import React from "react";
import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./3dCard";

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

const MotionCircleCheck = motion(CircleCheck);
const MotionCircleX = motion(CircleX);

export default function PricingCards() {
  return (
    <div className="relative z-20 flex flex-wrap justify-center gap-6">
      {pricingData.map((plan, index) => (
        <CardContainer key={index}>
          <CardBody
            className={` px-12 p-6 rounded-3xl ${
              plan.featured
                ? "bg-gradient-to-br from-[#001c66] to-[#0146f9] text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <CardItem
              translateZ="50"
              className={`text-xl font-bold mb-4 ${
                plan.featured ? "text-white" : "text-blue-600"
              }`}
            >
              {plan.name}
              <CardItem
                translateZ="0"
                className={`${
                  plan.featured ? "text-white" : "text-[#141414]"
                } font-normal text-sm mb-6`}
              >
                {plan.duration}
              </CardItem>
            </CardItem>
            <CardItem translateZ="50" className=" space-y-6 mb-12">
              {plan.features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <span className="text-sm">{feature.name}</span>
                    </div>
                    <div className="pl-12 justify-center items-center">
                      {feature.included ? (
                        <MotionCircleCheck
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                          color={`${!plan.featured ? "#0146f9" : "white"} `}
                        />
                      ) : (
                        <MotionCircleX
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                          opacity={!plan.featured ? "100%" : "25%"}
                          color="#c7c7c7"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={`border-b ${
                      plan.featured ? "border-white" : "border-black"
                    }`}
                  ></div>
                </React.Fragment>
              ))}
            </CardItem>
            <CardItem translateZ="50" className="text-3xl font-bold mb-2">
              {plan.price}
            </CardItem>
            {plan.note && (
              <CardItem translateZ="50" className="text-xs text-gray-500">
                {plan.note}
              </CardItem>
            )}
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
