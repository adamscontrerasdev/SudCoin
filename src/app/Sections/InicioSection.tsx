"use client";
import React, { useRef } from "react";
import Container from "../Components/common/Container";
import WhitePapper from "../Components/WhitePapper";
import VideoGet from "../Components/common/VideoGet";

const InicioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Container id="home">
      <div
        className="w-full h-[100dvh] flex justify-center items-center relative px-6 md:px-20 py-10 flex-col"
        ref={sectionRef}
      >
        <div className="w-full h-full rounded-tl-3xl rounded-br-3xl relative p-4 md:p-10 overflow-hidden flex items-center justify-center flex-col text-center">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <video
              src="/assets/3129977-uhd_3840_2160_30fps.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-10 uppercase z-10">
            La nueva moneda digital <br /> de sudamérica
          </h1>

          {/* Actions */}
          <WhitePapper />
          <VideoGet />
        </div>
      </div>
    </Container>
  );
};

export default InicioSection;
