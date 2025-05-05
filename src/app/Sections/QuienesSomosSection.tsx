import React, { JSX } from "react";
import Container from "../Components/common/Container";
import {
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiDollarSign,
  FiClock,
  FiBarChart2,
} from "react-icons/fi";

const QuienesSomosSection = () => {
  const cards = [
    {
      title: "Propósito claro",
      text: "Creamos una alternativa sólida al dólar, diseñada específicamente para los desafíos y oportunidades de América del Sur.",
      icon: <FiGlobe size={28} className="text-[var(--primary)]" />,
      neon: false,
    },
    {
      title: "Tecnología confiable",
      text: "Nuestra infraestructura combina respaldo en monedas locales con blockchain para asegurar transparencia, trazabilidad y seguridad.",
      icon: <FiShield size={28} className="text-[var(--primary)]" />,
      neon: false,
    },
    {
      title: "Visión regional",
      text: "Promovemos la cooperación económica entre países sudamericanos, fortaleciendo la soberanía financiera colectiva.",
      icon: <FiTrendingUp size={28} className="text-[var(--primary)]" />,
      neon: true,
    },
  ];

  const valueCards = [
    {
      title: "Estabilidad regional",
      text: "SUD mantiene baja volatilidad gracias a su respaldo en una canasta de monedas sudamericanas.",
      icon: <FiDollarSign size={28} className="text-[var(--primary)]" />,
      neon: false,
    },
    {
      title: "Rendimiento automático",
      text: "Los SUD generan intereses diarios de forma pasiva, sin staking ni exposición a riesgo cripto.",
      icon: <FiBarChart2 size={28} className="text-[var(--primary)]" />,
      neon: true,
    },
    {
      title: "Transacciones eficientes",
      text: "Pagos internacionales y remesas procesadas en segundos, sin intermediarios y con mínimos costos.",
      icon: <FiClock size={28} className="text-[var(--primary)]" />,
      neon: false,
    },
  ];

  const InfoCard = ({
    title,
    text,
    neon,
    icon,
  }: {
    title: string;
    text: string;
    neon: boolean;
    icon: JSX.Element;
  }) => (
    <div className=" relative cursor-default">
      <div className=" rounded-lg shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-md duration-300 relative z-10 backdrop-blur-3xl">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-base text-white/90 leading-relaxed">{text}</p>
      </div>
      {neon && (
        <div className="bg-[var(--primary)] w-20 aspect-square rounded-full filter blur-3xl absolute -top-10 -right-10 opacity-70 z-0" />
      )}
    </div>
  );
  

  return (
    <Container id="about">
      <section
        className="w-full max-w-7xl md:px-10 flex flex-col gap-20 relative rounded-2xl overflow-hidden md:p-10 m-5 pt-20 px-5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1707568774879-49bcd6421a00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ¿Quiénes somos? */}
        <div className="flex flex-col gap-6 items-start relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] drop-shadow-lg">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            SUD es una moneda digital regional diseñada para ofrecer una alternativa estable, eficiente y tecnológicamente avanzada al dólar, pensada para la realidad económica de Sudamérica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-20">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>

        {/* Propuesta de valor */}
        <div className="flex flex-col gap-6 items-start relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] drop-shadow-lg">
            Propuesta de valor
          </h2>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Combinamos estabilidad, rendimiento y eficiencia para ofrecer una moneda digital alineada con la economía real de nuestra región.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-20">
          {valueCards.map((card, index) => (
            <InfoCard key={`value-${index}`} {...card} />
          ))}
        </div>

        {/* Cierre */}
        <div className="text-left relative z-20 max-w-2xl">
          <p className="text-lg italic text-white/80">
            “Impulsamos una nueva era de integración financiera en Sudamérica, con una moneda digital pensada para sus ciudadanos.”
          </p>
        </div>

        <div
          className="w-full h-full top-0 left-0 absolute z-10"
          style={{
            background: `radial-gradient(circle at center, transparent 25%, #000 80%)`,
          }}
        />
      </section>
    </Container>
  );
};

export default QuienesSomosSection;
