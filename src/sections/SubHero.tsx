import { o } from "../assets";

function SubHero() {
  return (
    <div className="text-white relative w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between top-24 md:top-48">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-0">
        <h1 className="italic text-lg sm:text-xl md:text-2xl">Work</h1>
        <div className="text-2xl sm:text-3xl md:text-6xl tracking-wider text-center md:text-left">
          CREATING
          <div className="flex items-center justify-center md:justify-start">
            <span>L</span>
            <img src={o} className="animate-spin w-4 sm:w-6 md:w-auto mx-1" alt="" />
            <span>VE BRANDS</span>
          </div>
        </div>
      </div>
      <div className="flex items-center md:items-end space-x-4 justify-center md:justify-start mt-6 md:mt-0">
        <button className="bg-black border-2 rounded-3xl p-2 md:p-2.5 w-28 sm:w-32 md:w-44 text-sm sm:text-base md:relative md:top-20">
          Nous Contracter
        </button>
        <div className="bg-white h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 md:relative md:top-28 md:right-2.5"></div>
      </div>
    </div>
  );
}
export default SubHero;
