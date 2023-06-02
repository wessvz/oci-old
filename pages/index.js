import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "@/components/video/Main";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Eyebrow from "@/components/layout/Eyebrow";
import Wrapper from "@/components/layout/Wrapper";
import Flex from "@/components/layout/Flex";
import Panel from "@/components/pages/home/Panel";
import Proposition from "@/components/pages/home/Proposition";
import products1 from "@/public/images/home/products-oci-1.jpg";
import products2 from "@/public/images/home/products-oci-2.jpg";
import products3 from "@/public/images/home/products-oci-3.jpg";
import products4 from "@/public/images/home/products-oci-4.jpg";

export default function Home() {
  return (
    <>
      <GlobalHead
        title="OCI | Smart solutions for energy and water networks"
        description="OCI specializes in custom assemblies. Discover our solutions for connecting energy and water grids in domestic homes, office buildings, and industrial sites."
        keywords="OCI, smart solutions, energy networks, water networks"
        type="Organization"
        name="OCI BV"
        url="https://www.ocibv.nl/"
      />
      <Hero />
      <Section style={1}>
        <Wrapper style={2} space="extra">
          <Eyebrow style={1}>Expertise</Eyebrow>
          <Title style={1} width="home">
            Customized assemblies
          </Title>
          <Copy style={2} width="normal">
            Smart solutions for connecting energy and water grids in domestic
            homes, office buildings and industrial sites.
          </Copy>
        </Wrapper>
      </Section>
      <Flex style={1}>
        <Panel
          eyebrow="Products"
          title="Designed to perform"
          copy="Connect and optimize energy and water systems with our trusted products. Integrated in almost every home connection in the Netherlands."
          cta="Explore solutions"
          link="/products"
          label="Go to products"
          image={products1}
          alt="OCI - Ball valves, fittings and other products."
          width={800}
          height={600}
        />
        <Panel
          eyebrow="Company"
          title="Guided by strong values"
          copy="At OCI, we exist to help our customers to work faster and smarter. Discover more about our values and how they shape everything we do."
          cta="Read more about OCI"
          link="/about"
          label="Go to about OCI"
          image={products2}
          alt="OCI - Fitting, ball valve and rubber products."
          width={800}
          height={600}
          order="reverse"
        />
      </Flex>
      <Proposition />
      <Section style={1}>
        <Wrapper style={2} space="extra">
          <Eyebrow style={1}>Commitment</Eyebrow>
          <Title style={1} width="home">
            Strong relationships
          </Title>
          <Copy style={2} width="normal">
            Creating sustainable impact by delivering unique value to our
            customers, partners and employees.
          </Copy>
        </Wrapper>
      </Section>
      <Flex style={1}>
        <Panel
          eyebrow="People"
          title="Social entrepreneurship"
          copy="OCI strives for a better society and believes that every person is equal. That is why we are proud to be a certified PSO 30+ company."
          cta="Find out what drives us"
          link="/about"
          label="Learn about our values"
          image={products3}
          alt="OCI - Metal hose, ball valve and other products"
          width={800}
          height={600}
          order="reverse"
        />
        <Panel
          eyebrow="Sustainability"
          title="Together we create change"
          copy="The transition to sustainability will inevitably impact all of our clients and partners. We are dedicated to providing support and guidance to navigate this transformative period."
          cta="Learn more"
          link="/sustainability"
          label="Go to sustainability"
          image={products4}
          width={800}
          height={600}
          alt="OCI - Ball valves and metal hose from the product range of OCI BV."
        />
      </Flex>
    </>
  );
}
