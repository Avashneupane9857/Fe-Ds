import { iconic, radius, table } from "../assets";

function RedSec() {
  return (
    <div className="text-[#DC2B46] w-[88%] mx-auto relative top-28 h-screen   text-4xl">
      <div className="flex justify-between">
        <div>
          <h1 className="italic text-2xl relative left-10">Notre agence</h1>
          <h1 className="text-7xl text-[#DC2B46] opacity-50">NOUS SOMMES</h1>
          <h1 className="text-5xl relative left-10 bottom-5">HYPRLST</h1>
          <div className="bg-[#DC2B46] text-black relative left-10 font-bold p-1 w-56 text-2xl">
            NOUS VOULONS
          </div>
        </div>

        <h1 className="font-thin relative top-48">Y e a h</h1>
      </div>
      <div className="relative left-15  w-[70%] mx-auto">
        <img src={radius} alt="" />
        <div className="text-xl  absolute top-20 left-20 ">
          <section className="flex gap-2">
            <div className="relative top-4 w-[350px]">
              {" "}
              <div className="flex gap-5 mb-4">
                {" "}
                <img className="relative bottom-3" src={iconic} alt="" />
                <h1>
                  Transformer le business en une histoire consistante et
                  attractive
                </h1>
              </div>
              <div className="flex gap-5 mb-4">
                {" "}
                <img className="relative bottom-3" src={iconic} alt="" />
                <h1>Réfléchir en profondeur à votre image de marque</h1>
              </div>
              <div className="flex gap-5 mb-4">
                {" "}
                <img className="relative bottom-3" src={iconic} alt="" />
                <h1>Revendiquer votre identité avec force</h1>
              </div>
            </div>
            <div>
              <div className="relative top-4 w-[350px]">
                {" "}
                <div className="flex gap-5 mb-4">
                  {" "}
                  <img className="relative bottom-3" src={iconic} alt="" />
                  <h1>Vous aider à clarifier vos objectifs, vos ambitions</h1>
                </div>
                <div className="flex gap-5 mb-4">
                  {" "}
                  <img className="relative bottom-3" src={iconic} alt="" />
                  <h1>
                    Vous inspirer chaque jour, vous apporter une vision et un
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="flex justify-between">
        <img src={table} alt="table" />
        <button className="border-2 border-[#DC2B46] h-10 p-2 relative top-40 text-[15px] rounded-2xl ">
          {" "}
          Notre Méthodologie Drop
        </button>
      </section>
    </div>
  );
}

export default RedSec;
