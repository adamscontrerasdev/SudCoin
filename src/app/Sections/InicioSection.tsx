"use client";
import React, { useEffect, useState, useRef } from "react";
import Container from "../Components/common/Container";

const InicioSection = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Mostrar si el top está dentro de los primeros 100px del viewport
      if (rect.top >= 0 && rect.top <= 100) {
        setShowPrompt(true);
      } else {
        setShowPrompt(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container id="home" p>
      <div
        ref={sectionRef}
        className="w-full max-w-7xl h-[100dvh] flex items-start justify-start md:justify-center md:items-center"
      >
        <div className="relative">
          <div className="relative z-10 rounded-2xl pt-20 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold">
              LA NUEVA MONEDA DIGITAL DE SUDAMÉRICA
            </h1>
            <p>Estabilidad, rendimiento y eficiencia en tus manos</p>
          </div>
          <div className="w-20 aspect-square bg-[var(--primary)] rounded-full filter blur-3xl absolute -bottom-10 -left-10" />
        </div>
      </div>

      {/* Scroll prompt */}
      <div
        className={`absolute bottom-0 w-full h-20 flex items-center justify-center z-50 transition-opacity duration-700 ${
          showPrompt ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-col items-center text-white cursor-pointer"
          onClick={() => (location.href = "#about")}
        >
          <p className="text-sm md:text-base mb-1">
            Descubre más sobre SUD Coin
          </p>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default InicioSection;
