import React from "react";
import InicioSection from "./Sections/InicioSection";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="pt-16">
      <Navbar />
      <InicioSection />
    </div>
  );
}
