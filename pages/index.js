import styles from "../styles/Home.module.css";
import Head from "next/head";
import Main from "../components/hero/Main";
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

import Hero from "@/components/video/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>OCI | Smart solutions for energy and water networks</title>
        <meta
          name="description"
          content="OCI specializes in custom assemblies. We create smart solutions for connecting energy and water grids in domestic homes, office buildings and industrial sites."
        />
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
          alt="Ball valves, fittings and other products from product range of OCI."
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
          alt="Fitting, ball valve and rubber products from OCI."
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
          cta="Learn more"
          link="/about"
          label="Go to products"
          image={products3}
          alt="Metal hose, ball valve and other products from OCI BV."
          width={800}
          height={600}
          order="reverse"
        />
        <Panel
          eyebrow="Sustainability"
          title="Together we create change"
          copy="The transition to sustainability will inevitably impact all of our clients and partners. We are dedicated to providing support and guidance to navigate this transformative period."
          cta="Learn more"
          link="/about"
          label="Go to about OCI"
          image={products4}
          width={800}
          height={600}
          alt="Ball valves and metal hose from the product range of OCI."
        />
      </Flex>
    </>
  );
}
