import Banner from "../sections/Banner";
import BlackSec from "../sections/BlackSec";
import Brands from "../sections/Brands";
import Clients from "../sections/Clients";
import Ft from "../sections/Ft";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import RedSec from "../sections/RedSec";
import SubFt from "../sections/SubFt";
import SubHero from "../sections/SubHero";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
      <Brands />
      <RedSec />
      <BlackSec />
      <Banner />
      <Clients />
      <SubFt />
      <Ft />
    </>
  );
}

export default LandingPage;
