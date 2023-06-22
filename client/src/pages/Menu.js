import React from "react";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slider from "../components/Slider";
import FilterSection from "../components/FilterSection";

// Exportăm componenta Menu ca default, ceea ce înseamnă că va putea fi importată sub acest nume în alte fișiere
export default function Menu() {
  return (
    // Container principal cu fundal configurat
    <div className="min-h-screen w-screen bg-generalBg bg-fixed bg-no-repeat bg-cover bg-center">
      {/* Containerul secundar care conține întreg conținutul */}
      <div
        className="w-full flex flex-col items-start justify-center mb-32 mt-40
       backdrop-blur-sm bg-seagull-800 bg-opacity-25 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 px-36"
      >
        {/* Titlul secțiunii care este animat cu un efect Fade left */}
        <Fade left>
          <p className="font-content text-4xl font-bold">
            Explorează meniul nostru
          </p>
        </Fade>

        {/* Un alt titlu și o linie decorativă, animate cu același efect */}
        <Fade left>
          <div className="flex flex-col items-start justify-start gap-1 mt-20">
            <p className="font-content text-2xl font-bold">
              Specialitățile noastre
            </p>
            <div
              className="w-20 h-1 rounded-md 
        bg-gradient-to-r from-seagull-300 to-[#95e9f8]"
            ></div>
          </div>
        </Fade>

        {/* Afisăm slider-ul cu produse, animat cu un efect Fade */}
        <Fade>
          <div className="w-full mt-12">
            <Slider />
          </div>
        </Fade>

        {/* Un alt titlu și o linie decorativă, animate cu un efect Fade left */}
        <Fade left>
          <div className="flex flex-col items-start justify-start gap-1 mt-20">
            <p className="font-content text-2xl font-bold">
              Preparatele noastre
            </p>
            <div
              className="w-20 h-1 rounded-md 
        bg-gradient-to-r from-seagull-300 to-[#95e9f8]"
            ></div>
          </div>
        </Fade>

        {/* Secțiunea de filtrare a preparatelor, animată cu un efect Fade bottom */}
        <Fade bottom>
          <div className="w-full">
            <FilterSection />
          </div>
        </Fade>
      </div>
    </div>
  );
}
