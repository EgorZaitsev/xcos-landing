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
import PricingCards from "./Pricing";

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
            className="bg-white text-[#141414] pt-12 pb-16 md:pb-32"
          >
            <div className="flex flex-row">
              <img className="" src="/Clippathgroup.svg" alt="" />
              <img src="" alt="" />
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Конференция <br />
                    по маркетингу МКОС
                  </h1>
                  <p className="text-lg md:text-xl mb-6 md:mb-8">
                    Успешный опыт экспертов, практические советы, обсудим
                    последние тенденции и найдем новые пути развития бизнеса
                  </p>
                  <p className="text-xl md:text-2xl mb-6 md:mb-8">
                    6-7 ноября 2024
                  </p>
                  <div className="flex items-center space-x-4 mb-6 md:mb-8">
                    <Video className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-base md:text-xl">
                      Онлайн через ZOOM и Телеграм-чат
                    </span>
                  </div>
                  <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                    <a href="/" className="btn-grad ">
                      Зарегистрироваться
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2  relative mt-8 md:mt-0">
                  <img
                    src="/mkos.png"
                    alt="Conference Illustration"
                    width={550}
                    height={550}
                    className="rounded-lg shadow-2xl w-full h-auto"
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
                <h2 className="text-3xl md:text-5xl leading-[140%] md:leading-[140%] font-semibold text-gray-900 mb-4">
                  ЦЕЛИ И ПРЕИМУЩЕСТВА
                  <br />
                  КОНФЕРЕНЦИИ
                </h2>
                <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#141414]">
                  <svg
                    className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H18M18 10L10 2M18 10L10 18"
                      stroke="#141414"
                      strokeWidth="2"
                    />
                  </svg>
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
          <section className="container mx-auto px-4">
            <h2 className="text-4xl text-center md:text-left md:text-5xl mb-10  font-bold">
              СТОИМОСТЬ УЧАСТИЯ
            </h2>
            <PricingCards />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="contact"
            className="py-16 md:py-20 bg-white text-[#131313]"
          >
            <img
              className="absolute bottom-0 right-0 w-1/2 h-auto object-contain object-bottom-right z-10"
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
              <a href="" className="btn-grad w-1/4 text-lg">
                ПРИНЯТЬ УЧАСТИЕ
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-900 relative z-50 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                X-COS Conference
              </h3>
              <p className="text-sm md:text-base">
                Ведущая онлайн-конференция для профессионалов в области
                телекоммуникаций.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Контакты
              </h3>
              <p className="text-sm md:text-base">Email: info@x-cos.ru</p>
              <p className="text-sm md:text-base">Телефон: +11111111111</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Следите за нами
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-sm md:text-base text-white hover:text-[#7005FF] transition duration-300"
                >
                  Telegram канал
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-white hover:text-[#7005FF] transition duration-300"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-white hover:text-[#7005FF] transition duration-300"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm md:text-base">
              &copy; 2024 X-COS Conference. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
