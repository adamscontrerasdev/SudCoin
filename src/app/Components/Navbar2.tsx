// Components/NavbarSticky.tsx
"use client";
import React, { useEffect, useState } from "react";

const NavbarSticky = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Quienes somos" },
    { href: "#how-it-works", label: "Como funciona" },
    { href: "#contact", label: "Contacto" },
  ];
  return (
    <div className="w-full h-full  bottom-0 left-0 z-50  flex items-start justify-center py-10 absolute ">
      <div
        className={`${
          top ? "bg-black/40 backdrop-blur-2xl" : ""
        } h-10  rounded-full sticky top-5 left-0 z-50 xl:mt-[calc(100dvh-160px)] mt-[60vh] flex items-center justify-center gap-2 p-3 md:p-7 transition-all duration-300 max-w-80 sm:max-w-max`}
      >
        <div className="h-20 w-auto flex items-center">
          <img
            src="/Logo/logo.png"
            alt="Logo SUD Coin"
            className="h-full w-auto object-contain"
          />
        </div>
        {sectionLinks.map((section, index) => (
          <div
            key={index}
            className="w-full h-10 flex items-center justify-center"
          >
            <a
              href={section.href}
              className="font-bold text-white text-xs md:text-base whitespace-nowrap cursor-pointer"
              style={{ color: "var(--text)" }}
            >
              {section.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarSticky;
