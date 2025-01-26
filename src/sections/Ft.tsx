import { Be, fb, insta, ln, pt, spo } from "../assets";

function Ft() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 bg-black text-white py-8">
      <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-6 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-xs font-light">
          <h1>Politique de confidentialité</h1>
          <h1>Politique des cookies</h1>
          <h1>Termes et conditions</h1>
          <h1>© 2022 Hyperealist</h1>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-xl font-bold">
          <h1>Projects</h1>
          <h1>Concept</h1>
          <h1>Playlist</h1>
          <h1>Contact</h1>
        </div>
      </div>

      <div className="flex justify-center md:justify-between items-center mt-8 space-x-4 md:space-x-0">
        {[insta, fb, ln, Be, spo, pt].map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Social icon ${index + 1}`}
            className="w-6 md:w-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default Ft;
