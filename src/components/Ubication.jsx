"use client";

import { useState } from "react";
import { ubications } from "../constants/index";

const Ubication = () => {
  const [activo, setActivo] = useState(0);
  const ubicacionActiva = ubications[activo];

  return (
    <div className="w-[100%] max-w-7xl md:mx-auto">
      <div className="py-[50px] flex flex-col justify-center items-center md:items-start  ">
        <h3 className="font-raleway font-[700] text-[24px] md:text-[48px] text-azul px-[25px] md:px-[80px]">
          Dónde estamos?
        </h3>
        <p className="font-raleway font-[400] text-[14px] md:text-[16px] text-azul mt-[20px] text-center  md:text-justify md:w-[70%] lg:w-[50%] px-[25px] md:px-[80px]">
          Sed ornare, sem sed laoreet egestas, nulla felis efficitur sem, non
          blandit tortor eros at nibh. Maecenas tempor, ex eu aliquet tempus,
          erat velit ultrices erat, non interdum tortor odio ut massa.
          Suspendisse vel euismod velit. Fusce vestibulum id dolor sit amet
          finibus.
        </p>
      </div>

      <div className="flex justify-between  px-[25px] w-[100%] ">
        <div
          onMouseEnter={() => setActivo(0)}
          onClick={() => setActivo(0)}
          className="group flex flex-col p-[20px] my-[20px] justify-center items-center w-[33%] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div className="h-[120px] w-[100px] md:h-[210px] md:w-[210px] rounded-xl md:rounded-full bg-azul group-hover:bg-verde transition-all duration-300 ease-in-out absolute -z-10"></div>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[600] text-[12px] md:text-[20px]">
            Capital Trinidad
          </p>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[400] text-[10px] md:text-[14px] md:mt-[15px]">
            Barrio UVT
            <br /> Sector 1
            <br /> Planta baja
            <br /> Departamento 2
          </p>
        </div>
        <div
          onMouseEnter={() => setActivo(1)}
          onClick={() => setActivo(1)}
          className="group flex flex-col p-[20px] my-[20px] justify-center items-center w-[33%] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div className="h-[120px] w-[100px] md:h-[210px] md:w-[210px] rounded-xl md:rounded-full bg-azul group-hover:bg-verde transition-all duration-300 ease-in-out absolute -z-10"></div>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[600] text-[12px] md:text-[20px]">
            Sarmiento <br />
            (Media Agua)
          </p>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[400] text-[10px] md:text-[14px] md:mt-[15px]">
            Barbozo y 9 de Julio
          </p>
        </div>
        <div
          onMouseEnter={() => setActivo(2)}
          onClick={() => setActivo(2)}
          className="group flex flex-col p-[20px] my-[20px] justify-center items-center w-[33%] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div className="h-[120px] w-[100px] md:h-[210px] md:w-[210px] rounded-xl md:rounded-full bg-azul group-hover:bg-verde transition-all duration-300 ease-in-out absolute -z-10"></div>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[600] text-[12px] md:text-[20px]">
            Concepción
          </p>
          <p className="text-white group-hover:text-azul transition-all duration-300 ease-in-out text-center font-raleway font-[400] text-[10px] md:text-[14px] md:mt-[15px]">
            Gral. Acha 768
          </p>
        </div>
      </div>

      <iframe
        src={ubicacionActiva.map}
        className="mx-auto mt-[20px] lg:mb-[50px] md:mt-[70px] w-[100%] h-[300px] rounded-none md:h-[400px] lg:rounded-[10px] drop-shadow-xl "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Ubication;
