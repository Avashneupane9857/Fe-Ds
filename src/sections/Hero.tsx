import { design, flower } from "../assets";
function Hero() {
  return (
    <div className="relative top-14 ">
      <div className="flex animate-spin flex-col items-center">
        {" "}
        <img className="w-14 " src={flower} alt="" />
      </div>
      <header className=" w-[88%] mx-auto relative top-18 flex justify-between">
        {" "}
        <div className="text-[#EDF738] text relative top-32">
          act <span>---</span> together
        </div>
        <div className="text-[#EDF738]   ">
          <img src={design} className="Design" alt="" />
          <div className="text-[80px]  text-center -top-1.5 font-bold leading-24 tracking-widest absolute left-0 w-full h-full">
            <h1>REVEAL</h1>
            <h1>THE BE[A]ST</h1>
          </div>
          <button className="bg-[#EDF738] relative left-54 -top-5  text-black h-6 tracking-normal rounded-sm w-20 text-[10px] ">
            HYPEREALIST
          </button>
        </div>
        <div className="text-[#EDF738] text2 relative top-32">
          create <span className="">---</span> your story
        </div>
      </header>
      <div className="bg-white absolute whiteBox right-0 top-65  w-10 p-2   h-36">
        {" "}
        <h1 className="font-bold text-2xl pb-6 ">W.</h1>
        <h1 className="transform rotate-90">Honors</h1>
      </div>
    </div>
  );
}
export default Hero;
