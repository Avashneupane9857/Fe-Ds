// import Banner from "../sections/Banner";
// import BlackSec from "../sections/BlackSec";
// import Brands from "../sections/Brands";
// import Clients from "../sections/Clients";
// import Ft from "../sections/Ft";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import SubHero from "../sections/SubHero";
// import RedSec from "../sections/RedSec";
// import SubFt from "../sections/SubFt";

function LandingPage() {
  return (
    <div className="bg-[#070707] min-h-screen">
      <Navbar />
      <Hero />
      <SubHero />
      {/* <Brands />
      <RedSec />
      <BlackSec />
      <Banner />
      <Clients />
      <SubFt />
      <Ft /> */}
    </div>
  );
}

export default LandingPage;
