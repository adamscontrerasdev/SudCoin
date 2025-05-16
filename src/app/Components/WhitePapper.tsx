import React, { useRef } from "react";
import type { AnimationItem } from "lottie-web";
import { Player } from "@lottiefiles/react-lottie-player";

const WhitePapper = () => {
  const animationRef = useRef<AnimationItem | null>(null);
  return (
    <div
      className="bg-[var(--background)] absolute top-0 right-0 z-50 p-3 sm:p-4 md:px-8 flex items-center justify-center rounded-bl-3xl gap-2 cursor-pointer"
      onMouseEnter={() => animationRef.current?.play()}
      onMouseLeave={() => animationRef.current?.stop()}
    >
      <h2 className="font-bold text-base sm:text-xl md:text-2xl">
        White Paper
      </h2>
      <div className="w-6 h-6 sm:w-8 sm:h-8 rotate-90">
        <Player
          lottieRef={(instance) => (animationRef.current = instance)}
          src="/Animations/system-regular-11-arrow-up-hover-arrow-up-1.json"
          autoplay={false}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div
        className="h-6 w-6 absolute -bottom-6 right-0"
        style={{
          background: `radial-gradient(circle at bottom left, transparent 70%, var(--background) 71%)`,
        }}
      />
      <div
        className="h-6 w-6 absolute top-0 -left-6"
        style={{
          background: `radial-gradient(circle at bottom left, transparent 70%, var(--background) 71%)`,
        }}
      />
    </div>
  );
};

export default WhitePapper;
