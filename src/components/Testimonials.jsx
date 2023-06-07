import React from "react";

import Testimonio from "../components/Testimonio";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-azul h-[50px] md:h-[100px]  drop-shadow-xl"></div>
      <div className="w-[100%]  flex flex-col justify-center items-center  md:items-start  md:mx-auto  ">
        <div className="bg-verde w-[100%] shadow-inner">
          <div className=" flex flex-col lg:flex-row py-[50px] md:py-[100px] max-w-7xl mx-auto">
            <div className="basis-1/2 flex flex-col h-[100%] self-center px-[25px]">
              <h3 className="font-raleway font-[700] text-[48px] md:text-[86px] text-azul px-[25px] md:px-[80px] text-center md:text-left leading-[48px] md:leading-[75px]">
                Esto es lo que opinan nuestros pacientes{" "}
              </h3>
              <p className="font-raleway font-[400] text-[14px] md:text-[16px] text-azul mt-[20px] md:mt-[60px] text-center  md:text-justify px-[25px] md:px-[80px]">
                Vivamus porttitor finibus leo, sit amet accumsan nisi facilisis
                in. Nulla metus mi, egestas quis sem sed, tempus rutrum velit.
                Donec pretium ligula.
              </p>
            </div>
            <div className="basis-1/2 relative flex px-[25px] mt-[40px] md:mt-[50px] flex-wrap gap-[10px] justify-center self-center">
              <Testimonio />
              <Testimonio />
              <Testimonio />
              <Testimonio />
              <Testimonio />
              <Testimonio />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-azul h-[50px] md:h-[100px] drop-shadow-arriba"></div>
    </div>
  );
};

export default Testimonials;
