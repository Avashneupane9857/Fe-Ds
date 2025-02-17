import { design, flower } from "../assets";
function Hero() {
  return (
    <div className="relative top-4 sm:top-14">
      <div className="flex animate-spin flex-col items-center">
        <img className="w-8 sm:w-14" src={flower} alt="" />
      </div>
      <header className="w-[95%] sm:w-[88%] mx-auto relative top-12 sm:top-18 flex justify-between">
        <div className="text-[#EDF738] hidden sm:block sm:relative top-16 sm:top-32 text-sm sm:text-base">
          act <span>---</span> together
        </div>
        <div className="text-[#EDF738] relative mx-auto">
          <img src={design} className="Design w-full max-w-[300px] sm:max-w-none absolute top-0 left-1/2 transform -translate-x-1/2 z-0" alt="" />
          <div className="text-[40px] sm:text-[80px] text-center relative z-10 font-bold leading-tight sm:leading-24 tracking-wider sm:tracking-widest">
            <h1>REVEAL</h1>
            <h1>THE BE[A]ST</h1>
          </div>
          <button className="bg-[#EDF738] block relative z-10 top-2 md:top-10 mx-auto text-black h-6 tracking-normal rounded-sm w-20 text-[10px]">
            HYPEREALIST
          </button>
        </div>
        <div className="text-[#EDF738] hidden sm:block sm:relative top-16 sm:top-32 text-sm sm:text-base">
          create <span>---</span> your story
        </div>
      </header>
      <div className="bg-white absolute whiteBox right-0 top-48 sm:top-65 w-8 sm:w-10 p-1 sm:p-2 h-28 sm:h-36">
        <h1 className="font-bold text-xl sm:text-2xl pb-4 sm:pb-6">W.</h1>
        <h1 className="transform rotate-90 text-sm sm:text-base whitespace-nowrap">Honors</h1>
      </div>
    </div>
  );
}
export default Hero;
