import React from "react";
import InicioSection from "./Sections/InicioSection";
import QuienesSomosSection from "./Sections/QuienesSomosSection";
import Contacto from "./Sections/Contacto";
import ComoFunciona from "./Sections/ComoFunciona";
import NavbarSticky from "./Components/Navbar2";

export default function Home() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <NavbarSticky />
      <InicioSection />
      <QuienesSomosSection />
      <ComoFunciona />
      <Contacto />
    </div>
  );
}
