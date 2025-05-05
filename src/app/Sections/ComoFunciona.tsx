'use client'
import React from "react";
import Container from "../Components/common/Container";
import {
  FiLayers,
  FiBarChart2,
  FiZap,
  FiDatabase,
  FiEye,
} from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const steps = [
  {
    icon: <FiLayers size={26} />, // Paso 1
    title: "Respaldo local",
    text: "Cada SUD está respaldado por una canasta de monedas sudamericanas.",
  },
  {
    icon: <FiBarChart2 size={26} />, // Paso 2
    title: "Inversión en renta fija",
    text: "Los fondos son invertidos en activos de renta fija en la región.",
  },
  {
    icon: <FiDatabase size={26} />, // Paso 3
    title: "Interés diario",
    text: "Los usuarios reciben rendimiento automático, sin staking ni riesgo cripto.",
  },
  {
    icon: <FiZap size={26} />, // Paso 4
    title: "Envío sin fricción",
    text: "Blockchain permite transferencias rápidas, económicas y sin bancos.",
  },
  {
    icon: <FiEye size={26} />, // Paso 5
    title: "Transparencia",
    text: "Cada token está respaldado y auditado por una tesorería regulada.",
  },
];

const Step = ({ step, index }: { step: any; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
      }}
      className="relative z-30 flex flex-col items-center text-center gap-4 w-[160px]" // Ancho fijo para consistencia
    >
      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-[var(--primary)] shadow-md">
        {step.icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
      <p className="text-sm text-white/80 max-w-[220px]">{step.text}</p>
    </motion.div>
  );
};

const ComoFuncionaSection = () => {
  return (
    <Container id="how-it-works">
      <section className="w-full max-w-7xl mx-auto px-5 md:px-10 py-24 flex flex-col items-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-16 text-center">
          ¿Cómo funciona SUD?
        </h2>

        {/* Timeline container */}
        <div className="relative w-full flex justify-center">
          {/* Línea profesional animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:flex absolute top-[45px] w-full h-1 origin-left bg-[var(--primary)] z-0 justify-between px-10"
          >
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex-1 border-t-2 border-solid border-[var(--primary)]" />
            ))}
          </motion.div>

          {/* Contenedor de pasos alineados */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 z-40 w-full max-w-5xl">
            {steps.map((step, index) => (
              <Step key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ComoFuncionaSection;