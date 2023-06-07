import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "../components/pages/about/Hero";
import Film from "@/components/pages/about/Film";
import Values from "@/components/pages/about/Values";
import Headline from "@/components/pages/about/Headline";
import Brand from "@/components/pages/about/Brand";

export default function AboutPage() {
  return (
    <>
      <GlobalHead
        title="About OCI - Connecting energy and water grids with smart solutions"
        description="OCI is dedicated to connect energy and water grids through sustainable solutions and innovative products. Let's shape a greener future together."
        keywords="OCI, sustainable solutions, innovative products water, energy"
        name="About OCI bv"
        url="https://www.ocibv.nl/about"
      />
      <Hero />
      <Headline />
      <Brand />
      <Values />
      <Film />
    </>
  );
}
