import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const topics = {
  day1: [
    {
      title: "Как защитить абонентскую базу от федеральных компаний",
      description:
        "Стратегии и тактики для сохранения клиентской базы в условиях конкуренции с крупными игроками.",
    },
    {
      title: "Повышение лояльности клиентов",
      description:
        "Удержание существующих клиентов и повышение их удовлетворенности услугами.",
    },
    {
      title: "Аналитика и оценка эффективности маркетинговых кампаний",
      description:
        "Как отслеживать и анализировать результаты маркетинговых активностей (CRM).",
    },
    {
      title: "Маркетинговые кампании",
      description:
        "Как создавать успешные рекламные кампании и оценивать их эффективность.",
    },
    {
      title: "Влияние социальных сетей на продажи",
      description:
        "Как социальные медиа могут повысить узнаваемость бренда и увеличить продажи.",
    },
    {
      title: "Соответствие трендам рынка в визуальном представлении компании",
      description: "Как сделать бренд современным и актуальным.",
    },
    {
      title: "Видео контент",
      description:
        "Как создавать и распространять видеоконтент для повышения вовлеченности аудитории.",
    },
    {
      title: "Использование Яндекс Бизнеса для продвижения услуг",
      description:
        "Как использовать возможности платформы для привлечения новых клиентов и укрепления позиций на рынке.",
    },
    {
      title: "Использование чат-ботов",
      description:
        "Как чат-боты могут улучшить клиентский сервис и повысить качество обслуживания.",
    },
    {
      title: "Новогодние офферы",
      description:
        "Как привлечь клиентов перед праздниками и создать уникальные корпоративные подарки.",
    },
    {
      title: "Использование речевой аналитики",
      description:
        "Как анализировать разговоры с клиентами для улучшения качества обслуживания и понимания их потребностей.",
    },
  ],
  day2: [
    {
      title:
        "Как эффективно привлечь новых клиентов при заходе на новую территорию",
      description: "Стратегии и тактики для успешного выхода на новые рынки.",
    },
    {
      title: "SEO-оптимизация",
      description:
        "Как улучшить позиции сайта в поисковой выдаче и привлечь больше трафика.",
    },
    {
      title: "Партнерские программы и коллаборации",
      description:
        "Как находить партнеров и сотрудничать с другими игроками рынка для расширения клиентской базы.",
    },
    {
      title: "Поколение Z и рынок телекоммуникаций",
      description:
        "Как привлечь молодых потребителей и адаптировать услуги под их потребности.",
    },
    {
      title: "Бизнес-аналитика",
      description:
        "Как проводить анализ рынка и конкурентов для принятия стратегических решений.",
    },
    {
      title: "Участие в городских мероприятиях и организация ивент активностей",
      description:
        "Используем городские мероприятия и ивенты как эффективный инструмент продвижения.",
    },
    {
      title: "Разработка стратегии ценообразования",
      description:
        "Какие факторы влияют на стоимость услуг и как определить оптимальную цену для конкурентного предложения.",
    },
    {
      title: "Кросс-сегментный маркетинг",
      description:
        "Как эффективно взаимодействовать с клиентами из разных сегментов.",
    },
    {
      title: "Особенности B2B маркетинга для интернет-провайдеров",
      description:
        "Как адаптировать маркетинговую стратегию для работы с корпоративными клиентами.",
    },
    {
      title: "Digital инструменты для B2B маркетинга",
      description:
        "Как использовать CRM системы, email-рассылки и другие digital инструменты для привлечения и удержания корпоративных клиентов.",
    },
  ],
};

const TopicCard = ({ title, description }) => (
  <div className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ">
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const DayTopics = ({ day, topics }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () =>
      container && container.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth;
      const scrollAmount = direction * cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <Calendar className="w-6 h-6 mr-2 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">День {day}</h2>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-4  "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {topics.map((topic, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] xl:w-[calc(25%-0.75rem)]"
              >
                <TopicCard
                  title={topic.title}
                  description={topic.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => scroll(-1)}
            className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!canScrollLeft}
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll(1)}
            className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ConferenceTopics() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Темы конференции
        </h2>
        <DayTopics day="1" topics={topics.day1} />
        <DayTopics day="2" topics={topics.day2} />
      </div>
    </section>
  );
}
