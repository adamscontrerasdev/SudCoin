import React from "react";
import Container from "../Components/common/Container";

const QuienesSomosSection = () => {
  const cards = [
    {
      title: "Propósito claro",
      text: "Creamos una alternativa sólida al dólar, diseñada específicamente para los desafíos y oportunidades de América del Sur.",
      neon: false,
    },
    {
      title: "Tecnología confiable",
      text: "Nuestra infraestructura combina respaldo en monedas locales con blockchain para asegurar transparencia, trazabilidad y seguridad.",
      neon: false,
    },
    {
      title: "Visión regional",
      text: "Promovemos la cooperación económica entre países sudamericanos, fortaleciendo la soberanía financiera colectiva.",
      neon: true,
    },
  ];

  const InfoCard = ({
    title,
    text,
    neon,
  }: {
    title: string;
    text: string;
    neon: boolean;
  }) => (
    <div className=" relative cursor-default">
      <div className=" rounded-lg shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-md duration-300 relative z-10 backdrop-blur-3xl">
        <h3 className="text-xl font-semibold  mb-2">{title}</h3>
        <p className=" text-base">{text}</p>
      </div>

      {neon && (
        <div className="bg-[var(--primary)] w-20 aspect-square rounded-full filter blur-3xl absolute -top-10 -right-10" />
      )}
    </div>
  );

  return (
    <Container id="about">
      <section
        className="w-full max-w-7xl md:px-10 flex flex-col gap-16 relative rounded-2xl overflow-hidden md:p-5 pt-16 px-5"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1707568774879-49bcd6421a00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB5ZWxsb3d8ZW58MHx8MHx8fDA%3D)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-5 items-start justify-start relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl text-left">
            SUD es una moneda digital diseñada para transformar la economía
            sudamericana. Ofrece una alternativa estable y eficiente, impulsada
            por tecnología avanzada y enfocada en la integración regional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-20">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              text={card.text}
              neon={card.neon}
            />
          ))}
        </div>

        <div className="text-left relative z-20">
          <p className="text-lg text-left max-w-2xl">
            “Impulsamos una nueva era de integración financiera en Sudamérica,
            con una moneda digital pensada para sus ciudadanos.”
          </p>
        </div>

        <div
          className="w-full h-full top-0 left-0 absolute z-10"
          style={{
            background: `radial-gradient(circle at center, transparent 20%, #000 70%)`,
          }}
        />
      </section>
    </Container>
  );
};

export default QuienesSomosSection;
