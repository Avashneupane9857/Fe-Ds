import Lottie from "lottie-react";
import { phone, worm } from "../assets";

function SubFt() {
  return (
    <div className="   flex top-20  h-screen">
      <button className="border-1  border-white relative top-90 left-70 cursor-pointer hover:bg-[#EDF738] hover:text-black w-40 rounded-2xl  bg-black text-white h-10 ">
        Nous contacter
      </button>
      <img src={worm} className=" w-[400px] animate-pulse" alt="" />
      <Lottie className="" animationData={phone} />
    </div>
  );
}

export default SubFt;
