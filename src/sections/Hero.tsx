import { design, flower } from "../assets";

function Hero() {
  return (
    <div className="relative top-10 md:top-14 px-4">
      <div className="flex animate-spin flex-col items-center">
        <img className="w-10 md:w-14" src={flower} alt="Flower" />
      </div>
      <div className="max-w-7xl mx-auto relative md:top-18 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#EDF738] text-center md:text-left relative md:top-32 mb-4 md:mb-0">
          act <span className="hidden md:inline">---</span> together
        </div>

        <div className="text-[#EDF738] text-center relative">
          <img src={design} className="mx-auto mb-4 md:mb-0" alt="Design" />
          <div className="text-3xl md:text-[80px] font-bold tracking-widest">
            <h1>REVEAL</h1>
            <h1>THE BE[A]ST</h1>
          </div>
          <button className="bg-[#EDF738] text-black mt-2 md:mt-0 md:absolute md:left-54 md:-top-5 h-8 px-4 rounded-sm text-xs tracking-normal">
            HYPEREALIST
          </button>
        </div>

        <div className="text-[#EDF738] text-center md:text-right relative md:top-32 mt-4 md:mt-0">
          create <span className="hidden md:inline">---</span> your story
        </div>
      </div>

      <div className="bg-white absolute right-0 top-48 md:top-65 w-16 md:w-10 p-2 h-24 md:h-36 hidden md:block">
        <h1 className="font-bold text-xl md:text-2xl pb-4">W.</h1>
        <h1 className="transform rotate-90">Honors</h1>
      </div>
    </div>
  );
}

export default Hero;
