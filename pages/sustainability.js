import Head from "next/head";
import Hero from "@/components/video/Main";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Eyebrow from "@/components/layout/Eyebrow";
import Wrapper from "@/components/layout/Wrapper";
import Flex from "@/components/layout/Flex";
import Panel from "@/components/pages/home/Panel";
import Proposition from "@/components/pages/home/Proposition";
import watch2 from "@/public/images/home/watch-2.jpg";
import watch from "@/public/images/home/watch.jpg";
import tag from "@/public/images/home/airtag.jpg";
import product from "@/public/images/home/product.jpg";
import metaalslang from "@/public/images/home/metaalslang.jpg";
import metaalslangen from "@/public/images/home/metaalslangen.jpg";
import metaalslangen2 from "@/public/images/home/metaalslangen-2.jpg";
import kogelkraan from "@/public/images/home/kogelkraan.jpg";

export default function Sustainability() {
  return (
    <>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="logo/favicon-16x16.png"
        />
        <link rel="manifest" href="logo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="logo/safari-pinned-tab.svg"
          color="#db0a40"
        />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
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
          image={product}
          alt="voorbeeld"
        />
        <Panel
          eyebrow="Company"
          title="Discover the world of OCI"
          copy="Efficiency and sustainability at the forefront. Innovating to transform markets, that's OCI's mission."
          cta="Learn more"
          link="/about"
          label="Go to about OCI"
          image={tag}
          alt="voorbeeld"
          order="reverse"
        />
      </Flex>
      <Proposition />

      <Section style={1}>
        <Wrapper style={2} space="extra">
          <Eyebrow style={1}>What drives us</Eyebrow>
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
          title="The heart of social entrepreneurship"
          copy="We strive for a better society and believe that every person is equal. No one is more or less than the other. We may therefore call ourselves a PSO 30+ company."
          cta="Learn more"
          link="/about"
          label="Go to products"
          image={watch2}
          alt="voorbeeld"
          order="reverse"
        />
        <Panel
          eyebrow="Sustainability"
          title="Together we create change"
          copy="The transition to sustainability will inevitably impact all of our clients and partners. We are dedicated to providing support and guidance to navigate this transformative period."
          cta="Learn more"
          link="/about"
          label="Go to about OCI"
          image={metaalslang}
          alt="voorbeeld"
        />
      </Flex>
    </>
  );
}
