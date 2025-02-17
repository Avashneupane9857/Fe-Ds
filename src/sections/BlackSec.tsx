import { box, sunflower, wordIcon } from "../assets";

function BlackSec() {
  return (
    <div className="h-[70vh] md:min-h-screen text-white w-[88%] relative mt-20 sm:mt-40 lg:mt-70 mx-auto">
      <div className="bg-white h-[0.3px] opacity-40 w-full"></div>

      <div className="flex justify-end gap-8 sm:gap-20 lg:gap-70 relative mt-8 sm:mt-12 lg:mt-16 mr-4 sm:mr-12 lg:mr-36">
        <img className="relative top-12 sm:top-20 lg:top-28 w-16 sm:w-20 lg:w-auto" src={sunflower} alt="" />
        <img className="animate-spin w-16 sm:w-20 lg:w-auto" src={box} alt="" />
      </div>

      <div className="text-2xl sm:text-3xl lg:text-5xl relative -mt-8 sm:-mt-10 lg:-mt-14 mr-8 sm:mr-20 lg:mr-60 tracking-widest flex flex-col gap-2 sm:gap-3">
        <h1>CA S'ÈCRIT</h1>
        <h1 className="relative -mr-4 sm:-mr-6 lg:-mr-10">HYPÈRLIST</h1>
        <div className="flex relative ml-20 sm:ml-40 lg:ml-60">
          <h1>CA SÈ PR</h1>
          <div className="flex items-center">
            <img src={wordIcon} className="w-4 sm:w-6 lg:w-auto" alt="" />
            <h1>N</h1>
            <img src={wordIcon} className="w-4 sm:w-6 lg:w-auto" alt="" />
            <h1>NCÈ</h1>
          </div>
        </div>
        <h1 className="relative ml-8 sm:ml-16 lg:ml-24">IPÈRE-RÈALISTÈ</h1>
      </div>

      <section className="relative mt-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="flex gap-4">
          <div className="bg-white h-[0.4px] opacity-30 w-16 sm:w-20 lg:w-28 relative top-5"></div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              hyper{" "}
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium">(h muet) \ipɛʁ\</span>
            </h1>
            <h1 className="font-normal text-[12px] sm:text-[13px] lg:text-[15px]">
              Préfixe familier, du grec huper : "sur"
            </h1>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white h-[0.4px] opacity-30 w-16 sm:w-20 lg:w-28 relative top-5"></div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              réaliste{" "}
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium">
                (h muet) \ʁe.a.lism\
              </span>
            </h1>
            <h1 className="font-normal text-[12px] sm:text-[13px] lg:text-[15px]">
              Adjectif, du latin realis : "relatif <br />
              aux choses matérielles"
            </h1>
          </div>
        </div>

        <div className="bg-white h-[0.4px] opacity-30 w-full lg:w-72 relative top-5"></div>
      </section>
    </div>
  );
}

export default BlackSec;
