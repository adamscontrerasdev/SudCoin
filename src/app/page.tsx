import React from "react";
import InicioSection from "./Sections/InicioSection";
import Navbar from "./Components/Navbar";
import QuienesSomosSection from "./Sections/QuienesSomosSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <InicioSection />
      <QuienesSomosSection />
    </div>
  );
}
