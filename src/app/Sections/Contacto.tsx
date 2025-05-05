import React from "react";
import Container from "../Components/common/Container";
import { FiMail, FiSend, FiTwitter, FiLinkedin, FiMessageSquare } from "react-icons/fi";

const ContactoSection = () => {
  return (
    <Container id="contacto">
      <section className="w-full max-w-7xl mx-auto px-5 md:px-10 py-24 flex flex-col items-center text-center gap-10 relative">
        {/* Fondo dinámico estilo cripto */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0f0f] to-black opacity-90" />

        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
          ¿Querés hablar con el equipo?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl">
          Estamos construyendo una moneda para toda Sudamérica. Si tenés ideas, proyectos o simplemente querés saber más, ¡te escuchamos!
        </p>

        {/* Caja destacada de contacto */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-3xl shadow-lg flex flex-col md:flex-row gap-8 items-center justify-around">
          <div className="flex flex-col items-center gap-4">
            <FiMail className="text-[var(--primary)]" size={32} />
            <p className="text-white text-lg font-medium">contact@sudcoin.com</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <FiTwitter className="text-[var(--primary)]" size={28} />
            <p className="text-white text-base">@sudcoin</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <FiLinkedin className="text-[var(--primary)]" size={28} />
            <p className="text-white text-base">/company/sudcoin</p>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <FiMessageSquare className="text-[var(--primary)]" size={36} />
          <h3 className="text-white text-xl font-semibold">Unite a la conversación</h3>
          <p className="text-white/70 max-w-xl">
            Estamos creando un ecosistema descentralizado, transparente y útil para todos. Sumate, compartí tu visión y ayudanos a construir el futuro financiero de Sudamérica.
          </p>
          <a
            href="mailto:contact@sudcoin.com"
            className="mt-4 inline-flex items-center gap-2 bg-[var(--primary)] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
          >
            <FiSend /> Escribinos ahora
          </a>
        </div>
      </section>
    </Container>
  );
};

export default ContactoSection;
