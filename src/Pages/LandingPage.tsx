import Banner from "../sections/Banner";
import BlackSec from "../sections/BlackSec";
import Brands from "../sections/Brands";
import Ft from "../sections/Ft";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import RedSec from "../sections/RedSec";
import SubFt from "../sections/SubFt";

import SubHero from "../sections/SubHero";

function LandingPage() {
  return (
    <div className="bg-[#070707] min-h-screen w-screen flex flex-col">
      <Navbar />
      <Hero />
      <SubHero />
      <Brands />
      <RedSec />
      <BlackSec />
      <Banner />
      <SubFt />
      <Ft />
    </div>
  );
}
export default LandingPage;
