
import { DsLogo, menu } from "../assets";

function Navbar() {
  return (
    <header className="w-full max-w-7xl px-4 mx-auto relative top-4 md:top-10 flex justify-between items-center">
      <img className="w-20 md:w-auto cursor-pointer" src={DsLogo} alt="Logo" />
      <img
        className="w-6 md:w-auto cursor-pointer hover:animate-ping"
        src={menu}
        alt="Menu"
      />
    </header>
  );
}
export default Navbar;
