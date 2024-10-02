import { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Video,
} from "lucide-react";
import PricingSection from "./Pricing";
import ConferenceTopics from "./ConferenceTopics";
import ParticipantBenefits from "./Faq";
import ThemeCard from "./ThemeCards";
import KeyThemes from "./Keydays";
import DayAgenda from "./DayAgenda";
import PricingCards from "./PricingCards/Pricing";

const agendaItems1 = [
  {
    number: "01",
    title: "ПОВЫШЕНИЕ ЛОЯЛЬНОСТИ КЛИЕНТОВ",
    description:
      "Удержание существующих клиентов и повышение их удовлетворенности услугами.",
  },
  {
    number: "02",
    title: "МАРКЕТИНГОВЫЕ КАМПАНИИ",
    description:
      "Как создавать успешные рекламные кампании и оценивать их эффективность.",
  },
  {
    number: "03",
    title: "ИСПОЛЬЗОВАНИЕ ЧАТ-БОТОВ",
    description:
      "Как чат-боты могут улучшить клиентский сервис и повысить качество обслуживания.",
  },
  {
    number: "04",
    title: "ВИДЕО КОНТЕНТ",
    description:
      "Как создавать и распространять видеоконтент для повышения вовлеченности аудитории.",
  },
  {
    number: "05",
    title: "НОВОГОДНИЕ ОФФЕРЫ",
    description:
      "Как привлечь клиентов перед праздниками и создать уникальные корпоративные подарки.",
  },
];

const agendaItems2 = [
  {
    number: "01",
    title: "SEO-ОПТИМИЗАЦИЯ",
    description:
      "Как улучшить позиции сайта в поисковой выдаче и привлечь больше трафика.",
  },
  {
    number: "02",
    title: "ПАРТНЕРСКИЕ ПРОГРАММЫ И КОЛЛАБОРАЦИИ",
    description:
      "Как находить партнеров и сотрудничать с другими игроками рынка для расширения клиентской базы.",
  },
  {
    number: "03",
    title: "БИЗНЕС-АНАЛИТИКА",
    description:
      "Как проводить анализ рынка и конкурентов для принятия стратегических решений.",
  },
  {
    number: "04",
    title: "DIGITAL ИНСТРУМЕНТЫ ДЛЯ B2B МАРКЕТИНГА",
    description:
      "CRM системы и email-маркетинг для привлечения и удержания корпоративных клиентов",
  },
  {
    number: "05",
    title: "РАЗРАБОТКА СТРАТЕГИИ ЦЕНООБРАЗОВАНИЯ",
    description:
      "Какие факторы влияют на стоимость услуг и как определить оптимальную цену для конкурентного предложения.",
  },
];

function AnimatedSection({ children, className }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function ConferenceLandingPage() {
  return (
    <div className="bg-white text-[#141414] font-['Montserrat']">
      <main className="">
        <AnimatedSection>
          <section
            id="hero"
            className="bg-[#f1f1f1]  rounded-b-[60px] text-[#141414] pt-8 sm:pt-12 pb-16 sm:pb-20 md:pb-32"
          >
            <div className=" md:mx-auto lg:mx-20  px-4 ">
              <div className="flex flex-col lg:flex-row w-full justify-between gap-8 lg:gap-32">
                <div className="flex flex-col w-full  lg:w-1/2">
                  <div className="flex flex-row  justify-between md:justify-start md:mb-32 pt-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
                    <img
                      className="h-8 sm:h-12"
                      src="/Clippathgroup.svg"
                      alt="Clip path group"
                    />
                    <img
                      className="h-8 sm:h-12"
                      src="/operators.svg"
                      alt="Operators"
                    />
                    <img className="h-8 sm:h-12" src="/A.svg" alt="A" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl mb-2 font-semibold text-left">
                      6-7 ноября 2024
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-16 leading-tight text-left">
                      Конференция по&nbsp;маркетингу МКОС
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 text-left">
                      Успешный опыт экспертов, практические советы, обсудим
                      последние тенденции и найдем новые пути развития бизнеса
                    </p>
                    <div className="flex items-center justify-start space-x-2 sm:space-x-4 mb-6 lg:mb-16">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-sm sm:text-base md:text-lg">
                        Онлайн через ZOOM и Телеграм-чат
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <a
                      href="/"
                      className="btn-grad text-left px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                    >
                      Зарегистрироваться
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center  lg:w-3/4   mt-8 lg:mt-0">
                  <img
                    src="/mkos.png"
                    alt="Conference Illustration"
                    className="rounded-[30px] shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="benefits" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-5xl leading-[140%] md:leading-[140%] font-semibold text-gray-900 ">
                  ЦЕЛИ И ПРЕИМУЩЕСТВА
                  <br />
                  КОНФЕРЕНЦИИ
                </h2>
                <div className="">
                  <img className="w-full" src="/Arrow.svg" alt="" />
                </div>
              </div>
              <div className="">
                <ThemeCard />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <KeyThemes />
        </AnimatedSection>
        <div className="bg-[#141414]">
          <AnimatedSection>
            <DayAgenda
              agendaItems={agendaItems1}
              day={{
                day: "ДЕНЬ 1",
                desc: "Как защитить абонентскую базу от\u00a0федеральных компаний",
              }}
            />
          </AnimatedSection>
          <AnimatedSection>
            <DayAgenda
              agendaItems={agendaItems2}
              day={{
                day: "ДЕНЬ 2",
                desc: "Как эффективно привлечь новых клиентов при\u00a0заходе на новую территорию",
              }}
            />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <ParticipantBenefits />
        </AnimatedSection>

        <AnimatedSection>
          <section className="container relative mb-14 z-50 mx-auto px-4">
            <h2 className="text-4xl text-center md:text-left md:text-5xl mb-10  font-bold">
              СТОИМОСТЬ УЧАСТИЯ
            </h2>
            <PricingCards />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="contact"
            className="relative z-10 py-16 md:py-20 bg-white text-[#131313]"
          >
            <img
              className="absolute bottom-0 right-0 w-[45%] h-auto object-contain object-bottom-right -z-10"
              src="/foot.png"
              alt=""
            />
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl mb-6 text-left font-bold">
                ХОТИТЕ УЧАСТВОВАТЬ?
              </h2>
              <p className="text-lg md:text-xl max-w-[706px] mb-10">
                Оставьте свои контакты в форме, чтобы мы могли связаться с вами
                и помочь в выборе тарифа.
              </p>
              <a
                href="/"
                className="btn-grad inline-block w-full sm:w-auto px-8 py-3 text-sm md:text-lg  "
              >
                ПРИНЯТЬ УЧАСТИЕ
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
