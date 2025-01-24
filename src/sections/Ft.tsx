import { Be, fb, insta, ln, pt, spo } from "../assets";

function Ft() {
  return (
    <div className="w-[80%] h-auto flex flex-col gap-18  bg-black  text-white  mx-auto ">
      <div className="flex justify-between bg-black font-light text-[12px] w-[70%] mx-auto">
        <h1>Politique de confidentialité</h1>
        <h1>Politique des cookies</h1>
        <h1>Termes et conditions</h1>
        <h1>© 2022 Hyperealist</h1>
      </div>
      <div className="flex  bg-black justify-between text-xl font-bold w-[80%] mx-auto">
        <h1>Projects</h1>
        <h1>Concept</h1>
        <h1>Playlist</h1>
        <h1>Contact</h1>
      </div>
      <div className="flex bg-black justify-between  font-bold ">
        <img src={insta} alt="" />
        <img src={fb} alt="" />
        <img src={ln} alt="" />
        <img src={Be} alt="" />
        <img src={spo} alt="" />
        <img src={pt} alt="" />
      </div>
    </div>
  );
}

export default Ft;
