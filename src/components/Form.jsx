import React from "react";
import Image from "next/image";
import contactImage from "../../public/contactImage.png";

const Form = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center  md:items-start max-w-7xl md:mx-auto py-[58px]">
        <h3 className="font-raleway font-[700] text-[24px] md:text-[48px] text-azul px-[25px] md:px-[80px] ">
          Contacto
        </h3>
        <p className="font-raleway font-[400] text-[14px] md:text-[16px] text-azul mt-[20px] text-center  md:text-justify md:w-[70%] lg:w-[50%] px-[25px] md:px-[80px]">
          Vivamus porttitor finibus leo, sit amet accumsan nisi facilisis in.
          Nulla metus mi, egestas quis sem sed, tempus rutrum velit. Donec
          pretium ligula a facilisis iaculis.
        </p>
      </div>

      <div className="bg-verde">
        <div className="mx-auto w-full flex max-h-[700px] max-w-7xl">
          <div className="basis-full mt-[30px] md:mt-[60px] flex flex-col md:flex-row md:basis-3/5 justify-center px-[25px] py-[50px]">
            <form className="w-full">
              <p className="font-raleway text-azul font-[600] text-[24px] md:text-[28px]">
                Contáctenos
              </p>

              <div className="flex flex-col md:flex-row md:w-[100%] md:justify-between">
                <div className="flex flex-col mt-[25px] md:w-[48%]">
                  <label
                    htmlFor="#name"
                    className="font-raleway text-azul font-[600] text-[14px] md:text-[18px] "
                  >
                    Nombre
                  </label>
                  <input
                    id="#name"
                    type="text"
                    className="bg-verde border-b-[1px] border-azul placeholder:font-raleway text-[14px] md:text-[18px] md:font-[200] placeholder:text-azul mt-[10px] focus:outline-none"
                    placeholder="Su Nombre"
                  />
                </div>
                <div className="flex flex-col mt-[25px] md:w-[48%]">
                  <label
                    htmlFor="#email"
                    className="font-raleway text-azul font-[600] text-[14px] md:text-[18px]"
                  >
                    Email
                  </label>
                  <input
                    id="#email"
                    type="email"
                    className="bg-verde border-b-[1px] border-azul placeholder:font-raleway text-[14px] md:text-[18px] placeholder:text-azul mt-[10px] focus:outline-none"
                    placeholder="Su Email"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-[25px]">
                <label
                  htmlFor="#mensaje"
                  className="font-raleway text-azul font-[600] text-[14px] md:text-[18px]"
                >
                  Mensaje
                </label>
                <textarea
                  id="#mensaje"
                  className="bg-verde border-b-[1px] border-azul placeholder:font-raleway text-[14px] md:text-[18px] placeholder:text-azul mt-[10px] focus:outline-none"
                  placeholder="Escriba su mensaje aquí"
                  rows={5}
                />

                <div className="mt-[30px] flex justify-end">
                  <button className="group bg-azul rounded-md w-[80px] px-[25px] py-[15px] flex justify-center hover:bg-white hover:w-full transition-all duration-300 ease-in-out">
                    <p className="font-raleway text-white text-[14px] font-[00] group-hover:text-azul transition-all duration-300 ease-in-out">
                      Enviar
                    </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="hidden md:flex md:basis-2/5 md:relative ">
            <div className="bg-verde w-full h-full absolute z-30 opacity-40"></div>
            <Image
              src={contactImage}
              fill
              alt="photo"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
