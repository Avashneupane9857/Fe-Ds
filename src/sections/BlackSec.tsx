import { box, sunflower, wordIcon } from "../assets";

function BlackSec() {
  return (
    <div className="h-screen text-white w-[88%] relative top-70 mx-auto">
      <div className="bg-white h-[0.3px] opacity-40  w-full"></div>

      <div className="flex justify-end gap-70 relative top-16 right-36 ">
        <img className="relative top-28 " src={sunflower} alt="" />
        <img className="animate-spin" src={box} alt="" />
      </div>
      <div className="text-5xl items-end relative bottom-14 right-60 tracking-widest flex flex-col gap-3">
        <h1>CA S'ÈCRIT</h1>
        <h1 className="relative right-10">HYPÈRLIST</h1>
        <div className="flex relative left-60">
          {" "}
          <h1>CA SÈ PR</h1>
          <div className="flex">
            <img src={wordIcon} alt="" />
            <h1>N</h1>
            <img src={wordIcon} alt="" />
            <h1>NCÈ</h1>
          </div>
        </div>
        <h1 className="relative left-24">IPÈRE-RÈALISTÈ</h1>
      </div>

      <section className="relative top-12 flex justify-between ">
        <div className="flex gap-4 ">
          <div className="bg-white h-[0.4px] opacity-30 w-28 relative top-5"></div>
          <div>
            {" "}
            <h1 className="text-3xl font-bold">
              hyper{" "}
              <span className="text-[10px] font-medium">(h muet) \ipɛʁ\</span>
            </h1>
            <h1 className="font-normal text-[15px]">
              Préfixe familier, du grec huper : “sur”
            </h1>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="bg-white h-[0.4px] opacity-30 w-28 relative top-5"></div>
          <div>
            {" "}
            <h1 className="text-3xl font-bold">
              réaliste{" "}
              <span className="text-[10px] font-medium">
                (h muet) \ʁe.a.lism\
              </span>
            </h1>
            <h1 className="font-normal text-[15px]">
              Adjectif, du latin realis : “relatif <br />
              aux choses matérielles”
            </h1>
          </div>
        </div>
        <div className="bg-white h-[0.4px] opacity-30 w-72 relative top-5"></div>
      </section>
    </div>
  );
}

export default BlackSec;
