import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { Facebook, Instagram } from "lucide-react";
import Banner from "../../public/footer.png";

const Footer = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center md:justify-around p-[25px]">
      <div className="w-full h-full bg-azul opacity-50 absolute -z-10"></div>
      <Image
        src={Banner}
        fill
        className="object-cover -z-20 saturate-0 brightness-50"
      />
      <Image src={Logo} className="w-[120px]" />
      <div className="flex mt-[15px] gap-[10px]">
        <Facebook className="text-white" />
        <Instagram className="text-white" />
      </div>
      <div className="mt-[15px] flex flex-col items-center">
        <p className="font-raleway text-white font-[400] text-[10px]">
          +542612524838
        </p>
        <p className="font-raleway text-white font-[400] text-[10px]">
          2644274279
        </p>
      </div>

      <p className="font-raleway text-white font-[400] text-[10px] mt-[15px] ">
        Hecho por <span className="font-[600]">Mate Studio ©</span> 2023
      </p>
    </div>
  );
};

export default Footer;
