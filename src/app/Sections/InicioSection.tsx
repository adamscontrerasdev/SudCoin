import React from "react";
import Container from "../Components/common/Container";

const InicioSection = () => {
  return (
    <Container>
      <div className="w-full max-w-7xl p-4 h-[calc(100dvh-4rem)] flex items-start justify-start md:justify-center md:items-center">
        <div className="relative">
          <div className=" relative z-10 rounded-2xl p-4 ">
            <h1 className="text-4xl md:text-6xl font-bold ">
              LA NUEVA MONEDA DIGITAL DE SUDAMERICA
            </h1>
            <p>Estabilidad, rendimiento y eficiencia en tus manos</p>
          </div>
          <div className="w-20 aspect-square bg-[var(--primary)] rounded-full filter blur-3xl absolute -bottom-10 -left-10" />
        </div>
      </div>
    </Container>
  );
};

export default InicioSection;
