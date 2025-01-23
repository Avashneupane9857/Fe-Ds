import { o } from "../assets";

function SubHero() {
  return (
    <div className="text-white relative w-[88%] mx-auto flex justify-between  top-48">
      <div className="flex gap-8">
        <h1 className="italic text-2xl">Work</h1>
        <h1 className=" text-6xl tracking-wider">
          CREATING
          <div className="flex">
            <h1>L</h1>
            <img src={o} alt="" />
            VE BRANDS
          </div>
        </h1>
      </div>
      <div className="flex">
        <div>
          {" "}
          <button className="bg-black border-2 rounded-3xl p-2.5 w-44 relative top-20">
            Nous Contracter
          </button>
        </div>
        <div className="bg-white h-14 w-14 relative top-28 right-2.5 "></div>
      </div>
    </div>
  );
}

export default SubHero;
