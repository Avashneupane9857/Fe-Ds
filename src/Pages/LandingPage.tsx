import Brands from "../sections/Brands";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";

import SubHero from "../sections/SubHero";

function LandingPage() {
  return (
    <div className="bg-[#070707] h-100vh">
      <Navbar />
      <Hero />
      <SubHero />
      <Brands />
      {/* <RedSec />
      <BlackSec />
      <Banner />
      <Clients />
      <SubFt /> */}
      {/* <Ft /> */}
    </div>
  );
}
export default LandingPage;
