import { o } from "../assets";

function SubHero() {
  return (
    <div className="text-white relative w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between top-24 md:top-48">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-0">
        <h1 className="italic text-xl md:text-2xl">Work</h1>
        <div className="text-3xl md:text-6xl tracking-wider">
          CREATING
          <div className="flex items-center">
            <span>L</span>
            <img src={o} className="animate-spin w-6 md:w-auto mx-1" alt="" />
            VE BRANDS
          </div>
        </div>
      </div>
      <div className="flex items-end space-x-4">
        <button className="bg-black border-2 rounded-3xl p-2 md:p-2.5 w-32 md:w-44 md:relative md:top-20">
          Nous Contracter
        </button>
        <div className="bg-white h-10 w-10 md:h-14 md:w-14 md:relative md:top-28 md:right-2.5"></div>
      </div>
    </div>
  );
}
export default SubHero;
