import React, { JSX } from "react";
import Container from "../Components/common/Container";
import styles from "../Components/common/float3D.module.css";
import { FiGlobe, FiShield, FiTrendingUp } from "react-icons/fi";
import AnimatedContent from "../Components/common/Animations/AnimatedContent";

const QuienesSomosSection = () => {
  const cards = [
    {
      title: "Propósito claro",
      text: "Creamos una alternativa sólida al dólar, diseñada específicamente para los desafíos y oportunidades de América del Sur.",
      icon: <FiGlobe size={28} className="text-[var(--primary)]" />,
      order: 0,
      img: "/assets/ilustraciones/target.png",
    },
    {
      title: "Visión regional",
      text: "Promovemos la cooperación económica entre países sudamericanos, fortaleciendo la soberanía financiera colectiva.",
      icon: <FiTrendingUp size={28} className="text-[var(--primary)]" />,
      order: 1,
      img: "/assets/ilustraciones/location.png",
    },
    {
      title: "Tecnología confiable",
      text: "Nuestra infraestructura combina respaldo en monedas locales con blockchain para asegurar transparencia, trazabilidad y seguridad.",
      icon: <FiShield size={28} className="text-[var(--primary)]" />,
      order: 0,
      img: "/assets/ilustraciones/lock-key.png",
    },
  ];

  const InfoCard = ({
    title,
    text,
    icon,
    order,
    img,
  }: {
    title: string;
    text: string;
    icon: JSX.Element;
    order: number;
    img: string;
  }) => (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
    >
      <div
        className="w-full bg-[var(--foreground)] rounded-3xl p-6 md:p-10 xl:p-20 flex flex-col gap-6 min-h-[50vh] justify-center"
        style={{
          background: `radial-gradient(circle at center, transparent 80%, ${
            order === 1 ? "var(--foreground)" : "var(--foreground)"
          })`,
        }}
      >
        <div
          className={`flex flex-col-reverse ${
            order === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } gap-10 items-center`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {icon}
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            </div>
            <p className="text-base md:text-lg text-white/90">{text}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="aspect-square w-full max-w-[350px] relative">
              <img
                src={img}
                alt="Ilustración"
                className={`absolute top-0 left-0 w-full h-full object-contain rounded-2xl ${styles.float3d}`}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );

  return (
    <Container id="about">
      <div className="w-full px-6 md:px-10 xl:px-20 py-10 pt-20 overflow-hidden">
        <section className="w-full flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--primary)] text-center">
            ¿Quiénes somos?
          </h2>
          <p className="text-base md:text-lg max-w-3xl text-white/90 text-center">
            SUD es una moneda digital regional diseñada para ofrecer una
            alternativa estable, eficiente y tecnológicamente avanzada al dólar,
            pensada para la realidad económica de Sudamérica.
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full mt-6">
            {cards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};

export default QuienesSomosSection;
