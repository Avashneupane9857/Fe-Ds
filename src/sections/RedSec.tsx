import { iconic, radius, table } from "../assets";

function RedSec() {
  return (
    <div className="text-[#DC2B46] w-full max-w-7xl mx-auto px-4 relative md:top-28 mb-20 md:mb-0">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          <h1 className="italic text-xl md:text-2xl md:relative md:left-10 mb-4">
            Notre agence
          </h1>
          <h1 className="text-3xl md:text-7xl opacity-50 mb-2">NOUS SOMMES</h1>
          <h1 className="text-2xl md:text-5xl md:relative md:left-10 md:bottom-5">
            HYPRLST
          </h1>
          <div className="bg-[#DC2B46] text-black font-bold p-1 w-full md:w-56 text-xl md:text-2xl md:relative md:left-10 text-center md:text-left">
            NOUS VOULONS
          </div>
        </div>
        <h1 className="hidden md:block font-thin relative top-48">Y e a h</h1>
      </div>

      <div className="relative w-full md:w-[70%] mx-auto mt-8 md:mt-0">
        <img src={radius} alt="" className="w-full" />
        <div className="absolute top-10 md:top-20 left-0 md:left-20 w-full px-4 md:px-0">
          <section className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[350px]">
              {[
                "Transformer le business en une histoire consistante et attractive",
                "Réfléchir en profondeur à votre image de marque",
                "Revendiquer votre identité avec force",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                  <img src={iconic} alt="" className="w-6 h-6" />
                  <h1 className="text-sm md:text-xl">{text}</h1>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[350px]">
              {[
                "Vous aider à clarifier vos objectifs, vos ambitions",
                "Vous inspirer chaque jour, vous apporter une vision et un",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                  <img src={iconic} alt="" className="w-6 h-6" />
                  <h1 className="text-sm md:text-xl">{text}</h1>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-0">
        <img src={table} alt="table" className="w-full md:w-auto" />
        <button className="border-2 border-[#DC2B46] h-10 p-2 text-[15px] rounded-2xl mt-4 md:mt-0 md:relative md:top-40">
          Notre Méthodologie Drop
        </button>
      </section>
    </div>
  );
}
export default RedSec;
