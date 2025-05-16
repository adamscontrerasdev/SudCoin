import { Player } from "@lottiefiles/react-lottie-player";
import type { AnimationItem } from "lottie-web";
import React, { useRef } from "react";

const VideoGet = () => {
  const animationRef = useRef<AnimationItem | null>(null);

  return (
    <div
      className="bg-[var(--background)] absolute bottom-0 left-0 z-20 p-3 sm:p-4 md:px-8 flex items-center justify-center rounded-tr-3xl gap-2 cursor-pointer"
      onMouseEnter={() => animationRef.current?.play()}
      onMouseLeave={() => animationRef.current?.stop()}
    >
      <h2 className="font-bold text-base sm:text-xl md:text-2xl text-[var(--text)]">
        Como funciona
      </h2>
      <div className="w-6 h-6 sm:w-8 sm:h-8">
        <Player
          lottieRef={(instance) => (animationRef.current = instance)}
          src="/Animations/system-regular-26-play-hover-play.json"
          autoplay={false}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div
        className="h-6 w-6 absolute -top-6 left-0"
        style={{
          background: `radial-gradient(circle at top right, transparent 70%, var(--background) 71%)`,
        }}
      />
      <div
        className="h-6 w-6 absolute bottom-0 -right-6"
        style={{
          background: `radial-gradient(circle at top right, transparent 70%, var(--background) 71%)`,
        }}
      />
    </div>
  );
};

export default VideoGet;
