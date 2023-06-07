import React from "react";
import Image from "next/image";
import ImgBanner from "../../public/banner.png";

const Banner = () => {
  return (
    <div className="w-full h-[100px] md:h-[300px] relative flex justify-center items-center">
      <div className="bg-azul w-full h-full opacity-50 absolute -z-10"></div>
      <Image src={ImgBanner} fill className="-z-20 object-cover" />
      <p className="absolute text-verde font-raleway text-[24px] md:text-[96px] font-[700]">
        ¡Volvé a sonreír!
      </p>
    </div>
  );
};

export default Banner;
