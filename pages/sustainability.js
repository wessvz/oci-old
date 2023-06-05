import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "../components/pages/sustainability/Hero";
import Section from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import Eyebrow from "@/components/layout/Eyebrow";
import Wrapper from "@/components/layout/Wrapper";
import Flex from "@/components/layout/Flex";
import Panel from "@/components/pages/sustainability/Panel";
import Cta from "@/components/pages/sustainability/Cta";
import Copy from "@/components/layout/Copy";
import valley from "@/public/images/sustainability/valley-amsterdam.jpg";
import almere from "@/public/images/sustainability/district-heating-almere.jpg";
import family from "@/public/images/sustainability/family.jpg";

export default function Sustainability() {
  return (
    <>
      <GlobalHead
        title="OCI and sustainability"
        description="Environmental responsibility is a core value at OCI. Read more about our goals and how we are creating a positive impact."
        keywords="sustainability, environmental responsibility, sustainable solutions"
        name="OCI and sustainability"
        url="https://www.ocibv.nl/sustainability"
      />
      <Hero />
      <Section style={1}>
        <Wrapper style={2} space="medium">
          <Eyebrow style={1}>Sustainability</Eyebrow>
          <Title style={1} width="home">
            Innovation at every step
          </Title>
          <Copy style={2} width="normal">
            We’re already carbon neutral across our corporate operations and are
            on the way to making carbon neutral products by 2030.
          </Copy>
        </Wrapper>
      </Section>
      <Flex style={4}>
        <Panel
          eyebrow="Company"
          title="Closer to carbon neutral"
          copy="We are proud that we produce more clean energy than we consume. However, we know that there is more work to be done."
          cta="Explore solutions"
          link="/products"
          label="Go to products"
          image={valley}
          alt="voorbeeld"
          width={800}
          height={600}
        />
        <Panel
          eyebrow="Indutrade"
          title="A plan designed for progress"
          copy="As part of the internation business group Indutrade, we have a shared ambition to be carbon neutral for scope 1 and 2 by 2030. Together we are developing a road map towards net zero emissions by 2050 at the latest."
          cta="Read more about OCI"
          link="/about"
          label="Go to about OCI"
          image={family}
          alt="voorbeeld"
          width={800}
          height={600}
          order="reverse"
        />
        <Panel
          eyebrow="Operations"
          title="Clean energy  is no longer optional"
          copy="Success is not about being the best, it's about always getting better. At OCI, we take this to heart and strive to improve every day."
          cta="Learn more"
          link="/about"
          label="Go to products"
          image={almere}
          alt="voorbeeld"
          width={800}
          height={600}
        />
        <Cta />
      </Flex>
    </>
  );
}
