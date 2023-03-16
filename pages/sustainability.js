import styles from "../styles/Sustainability.module.css";
import Head from "next/head";
import Hero from "@/components/video/Main";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Eyebrow from "@/components/layout/Eyebrow";
import Wrapper from "@/components/layout/Wrapper";
import Flex from "@/components/layout/Flex";
import Panel from "@/components/pages/home/Panel";
import productPlaceholder6 from "@/public/images/about/product-placeholder-6.jpg";

export default function Sustainability() {
  return (
    <>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Section style={1}>
        <Wrapper style={2} space="extra">
          <Eyebrow style={1}>What we do</Eyebrow>
          <Title style={1} width="home">
            Customized assemblies
          </Title>
          <Copy style={2} width="normal">
            Smart solutions for connecting energy and water grids to domestic
            homes, office buildings and industrial sites.
          </Copy>
        </Wrapper>
      </Section>
      <Flex style={1}>
        <Panel
          eyebrow="Products"
          title="How we make a difference"
          copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
          cta="Learn more"
          link="/products"
          label="Go to products"
          image={productPlaceholder6}
          alt="voorbeeld"
        />
        <Panel
          eyebrow="Company"
          title="Discover the world of OCI"
          copy="Efficiency and sustainability at the forefront. Innovating to transform markets, that's OCI's mission."
          cta="Learn more"
          link="/about"
          label="Go to about OCI"
          image={productPlaceholder6}
          alt="voorbeeld"
          order="reverse"
        />
      </Flex>
    </>
  );
}
