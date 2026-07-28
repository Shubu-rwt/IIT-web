import Hero from "../components/sections/Hero";
import WorkingOpportunities from "../components/sections/WorkingOpportunities";
import Facilities from "../components/sections/Facilities";
import Prototypes from "../components/sections/Prototypes";

export default function Homepage() {
  return (
    <section id="home" className="bg-[#F8FAFC]">

      <Hero />

      <WorkingOpportunities />

      <Facilities />

      <Prototypes />

    </section>
  );
}