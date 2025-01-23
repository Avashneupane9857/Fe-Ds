import { design, flower } from "../assets";

function Hero() {
  return (
    <header className=" w-[88%] mx-auto relative top-38 flex justify-between">
      <div className="text-[#EDF738] relative top-32">
        act <span>---</span> together
      </div>
      <div className="text-[#EDF738] flex flex-col items-center ">
        <div className="">
          {" "}
          <img
            src={flower}
            alt=""
            className="absolute -top-20 left-1/2 -translate-x-4 h-8 w-8 "
          />
        </div>

        <div>
          <img src={design} alt="" />
          <div className="text-[80px] text-center -top-1.5 font-bold leading-24 tracking-widest absolute left-0 w-full h-full">
            <h1>REVEAL</h1>
            <h1>THE BE[A]ST</h1>
            <button className="bg-[#EDF738] relative  text-white h-6 tracking-normal rounded-sm w-20 text-[10px] ">
              HYPEREALIST
            </button>
          </div>
        </div>
      </div>
      <div className="text-[#EDF738] relative top-32">
        create <span className="">---</span> your story
      </div>
    </header>
  );
}

export default Hero;
