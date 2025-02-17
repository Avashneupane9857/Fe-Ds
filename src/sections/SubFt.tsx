import Lottie from "lottie-react";
import { phone, worm } from "../assets";

function SubFt() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between h-[40vh] md:h-[70vh] mt-20 md:mt-40">
      <div className="relative w-full md:w-[50%]">
        <img src={worm} className="w-[95%] sm:w-[95%] animate-pulse" alt="" />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          border border-white hover:bg-[#EDF738] hover:text-black 
          w-[30%] sm:w-60 md:w-40 h-10 rounded-2xl bg-black text-white 
          transition-colors duration-300">
          Nous contacter
        </button>
      </div>
      <Lottie className="relative top-0 sm:top-10" animationData={phone} />
    </div>
  );
}

export default SubFt;
