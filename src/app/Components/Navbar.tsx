"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    <Link href="#">Inicio</Link>,
    <Link href="#about">Quienes somos</Link>,
    <Link href="#contact">Como funciona</Link>,
    <Link href="#contacto">Contacto</Link>,
  ];

  return (
    <>
      <div className="bg-[var(--foreground)] fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-50 ">
        <div className="w-full h-10 flex items-center ">
          <h1>SUD Coin</h1>
        </div>
        <motion.div
          className="w-1/2 h-[100dvh] flex items-start justify-end bg-[var(--foreground)] absolute top-0 right-0 z-50 shadow-2xl pt-4 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        >
          <BiMenuAltRight
            className="text-white text-2xl absolute top-8 -left-12 -translate-y-1/2 w-10 h-10 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className="w-10 h-10  absolute top-16 -left-10"
            style={{
              background: `radial-gradient(circle at bottom left, transparent 70%, var(--foreground) 70.5%`,
            }}
          ></div>

          <div className="w-full h-1/2 flex flex-col justify-start items-start gap-5 px-3">
            <h2 className="text-white text-3xl font-bold">Secciones</h2>
            <ul className="flex flex-col gap-2 text-xl">
              {sections.map((section, index) => (
                <li key={index} onClick={() => setIsOpen(false)}>
                  {section}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-2 text-xl">
            {sections.map((section, index) => (
              <li
                key={index}
                className="whitespace-nowrap hover:text-[var(--primary)] transition-colors duration-300"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-[100dvh] trasition-all duration-300 z-20 ${
          isOpen
            ? "backdrop-blur-sm pointer-events-auto"
            : "backdrop-blur-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
