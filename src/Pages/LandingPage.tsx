import BlackSec from "../sections/BlackSec";
import Brands from "../sections/Brands";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import RedSec from "../sections/RedSec";

import SubHero from "../sections/SubHero";

function LandingPage() {
  return (
    <div className="bg-[#070707] min-h-screen w-screen ">
      <Navbar />
      <Hero />
      <SubHero />
      <Brands />
      <RedSec />
      <BlackSec />
      {/* <Banner />
      <Clients />
      <SubFt />
      <Ft /> */}
    </div>
  );
}
export default LandingPage;
