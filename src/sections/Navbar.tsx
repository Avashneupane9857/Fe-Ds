import { DsLogo, menu } from "../assets";
import "../index.css";
function Navbar() {
  return (
    <header className="w-[88%] mx-auto relative top-10 flex justify-between">
      <img className="cursor-pointer" src={DsLogo} alt="" />

      <img
        className=" cursor-pointer  hover:animate-custom-ping"
        src={menu}
        alt=""
      />
    </header>
  );
}

export default Navbar;
