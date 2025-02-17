import { Be, fb, insta, ln, pt, spo } from "../assets";

function Ft() {
  return (
    <div className="w-full bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 md:space-y-0">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-xs font-light text-center sm:text-left">
              <h1 className="hover:text-[#EDF738] cursor-pointer">Politique de confidentialité</h1>
              <h1 className="hover:text-[#EDF738] cursor-pointer">Politique des cookies</h1>
              <h1 className="hover:text-[#EDF738] cursor-pointer">Termes et conditions</h1>
              <h1>© 2022 Hyperealist</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-lg sm:text-xl font-bold">
              <h1 className="hover:text-[#EDF738] cursor-pointer">Projects</h1>
              <h1 className="hover:text-[#EDF738] cursor-pointer">Concept</h1>
              <h1 className="hover:text-[#EDF738] cursor-pointer">Playlist</h1>
              <h1 className="hover:text-[#EDF738] cursor-pointer">Contact</h1>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center space-x-6 sm:space-x-8 mt-8">
            {[insta, fb, ln, Be, spo, pt].map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Social icon ${index + 1}`}
                className="w-5 sm:w-6 md:w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ft;
