import React, { useEffect, useState } from "react";
import grid from "../assets/grid.png";
import dion from "../assets/dion.png";
import code from "../assets/code.png";
import creative from "../assets/creative.png";
import business from "../assets/business.png";
import glowBlue from "../assets/glow_blue.png";
import glowPurple from "../assets/glow_purple.png";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Track scroll position for parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about-me"
      className="relative w-full border-t-2 border-purple-600/30 overflow-hidden"
    >
      {/* Background elements */}
      <img
        src={grid}
        className="absolute inset-0 w-full h-full object-cover opacity-75 -z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${offsetY * 0}px)`,
        }}
        alt=""
      />
      <img
        src={glowBlue}
        className="absolute top-36 md:top-4 left-0 -z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${offsetY * -0.2}px)`,
        }}
        alt=""
      />
      <img
        src={glowPurple}
        className="absolute top-1/2 md:top-8 right-0 -z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${offsetY * -0.1}px)`,
        }}
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent -z-40 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent -z-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center px-4 py-16 md:pb-24">
        <div className="flex flex-col gap-y-2">
          <div>
            <span className="text-4xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-bold md:text-5xl">
              About Me
            </span>
          </div>
          <div>
            <p className="text-slate-300 text-lg">
              Blending Creativity, Code, and Business
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center py-12">
          <img
            src={dion}
            alt=""
            className="w-full md:w-[400px] px-8 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-8 items-center justify-between py-8">
          <img
            src={code}
            alt=""
            className="hover:scale-105 ease-in-out transition-all duration-200 w-full"
          />
          <img
            src={creative}
            alt=""
            className="hover:scale-105 ease-in-out transition-all duration-200 w-full"
          />
          <img
            src={business}
            alt=""
            className="hover:scale-105 ease-in-out transition-all duration-200 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
