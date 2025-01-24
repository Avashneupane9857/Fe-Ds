import { worm } from "../assets";

function SubFt() {
  return (
    <div className="w-[88%] mx-auto relative flex top-20 left-10 h-screen">
      <img className="animate-spin" src={worm} alt="" />
      <button className="border-1 border-white relative top-90 left-30 cursor-pointer hover:bg-[#EDF738] hover:text-black w-40 rounded-2xl  bg-black text-white h-10 ">
        Nous contacter
      </button>
    </div>
  );
}

export default SubFt;
