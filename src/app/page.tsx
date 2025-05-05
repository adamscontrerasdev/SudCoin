import React from "react";
import InicioSection from "./Sections/InicioSection";
import Navbar from "./Components/Navbar";
import QuienesSomosSection from "./Sections/QuienesSomosSection";
import Contacto from "./Sections/Contacto";
import ComoFunciona from "./Sections/ComoFunciona";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <InicioSection />
      <QuienesSomosSection />
      <ComoFunciona />
      <Contacto/>
    </div>
  );
}
