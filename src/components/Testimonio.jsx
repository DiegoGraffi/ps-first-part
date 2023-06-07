import React from "react";
import { User2 } from "lucide-react";

const Testimonio = () => {
  return (
    <div className="group bg-white flex flex-col rounded-lg justify-center items-center p-[15px] md:p-[25px] w-[45%] drop-shadow-lg ">
      <User2 className="bg-azul text-white rounded-full p-[5px] w-[48px] h-[48px] group-hover:scale-125 group-hover:bg-verde group-hover:text-azul transition-all duration-300 ease-in-out " />
      <p className="font-raleway text-center mt-[20px] font-[400] text-[12px] text-gris group-hover:text-azul transition-all duration-300 ease-in-out">
        “In eros tortor, facilisis quis purus in, rutrum tempus diam. Proin non
        justo ipsum. Etiam porttitor nisi nec ante consequat commodo a vel dui.”
      </p>
    </div>
  );
};

export default Testimonio;
