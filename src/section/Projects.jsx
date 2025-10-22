import React from "react";
import minimiwaste from "../assets/projects/minimiwaste.png";
import wedding from "../assets/projects/wedding.png";
import ac from "../assets/projects/ac.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex w-full py-8 items-center justify-center">
          <span className="text-center text-4xl bg-gradient-to-r from-purple-600  to-cyan-500 bg-clip-text text-transparent font-bold md:text-5xl">
            Projects
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 items-center justify-between gap-x-4">
          <a
            href="https://dionwsaja.github.io/ac_kw_2"
            target="_blank"
            className="hover:scale-105 transition-all ease-in-out duration-75 "
          >
            <div className="w-full  h-full   rounded-lg overflow-hidden md:h-[200px] border border-purple-600">
              <img
                src={ac}
                alt=""
                className="object-cover h-full w-full bg-center bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://dionwsaja.github.io/minimiwaste/"
            target="_blank"
            className="hover:scale-105 transition-all ease-in-out duration-75"
          >
            <div className="w-full rounded-lg overflow-hidden md:h-[200px] border border-purple-600">
              <img
                src={minimiwaste}
                alt=""
                className="object-cover h-full w-full bg-center bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://dionwsaja.github.io/wedding/#home"
            target="_blank"
            className="hover:scale-105 transition-all ease-in-out duration-75"
          >
            <div className="w-full   rounded-lg overflow-hidden md:h-[200px] border border-purple-600">
              <img
                src={wedding}
                alt=""
                className="object-cover bg-center h-full w-full bg-no-repeat"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
