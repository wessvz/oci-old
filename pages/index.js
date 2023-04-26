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
import watch from "@/public/images/home/watch-2.jpg";
import tag from "@/public/images/home/airtag.jpg";
import product from "@/public/images/home/product.jpg";
import metaalslang from "@/public/images/home/metaalslang.jpg";
import person from "@/public/images/home/person.jpg";
import valves from "@/public/images/home/valves-oci.jpg";
import products1 from "@/public/images/home/products-oci-1.jpg";
import products2 from "@/public/images/home/products-oci-2.jpg";
import products3 from "@/public/images/home/products-3.jpg";
import products4 from "@/public/images/home/products-4.jpg";
import products5 from "@/public/images/home/products-5.jpg";
import products6 from "@/public/images/home/products-6.jpg";

export default function Home() {
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

      <Main />

      <Section style={1}>
        <Wrapper style={2} space="extra">
          <Eyebrow style={1}>Expertise</Eyebrow>
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
          title="Designed to perform"
          copy="Connect and optimize energy and water systems with our trusted products. Integrated in almost every home connection in the Netherlands."
          cta="Explore solutions"
          link="/products"
          label="Go to products"
          image={products1}
          alt="voorbeeld"
          width={800}
          height={600}
        />
        <Panel
          eyebrow="Company"
          title="Guided by strong values"
          copy="At OCI we exist to help our customers to work faster and smarter. Discover more about our values and how they shape everything we do."
          cta="Read more about OCI"
          link="/about"
          label="Go to about OCI"
          image={products2}
          alt="voorbeeld"
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
          title="Diverse and inclusive workforce"
          copy="OCI strives for a better society and believes that every person is equal. That is why we are proud to be a certified PSO 30+ company."
          cta="Learn more"
          link="/about"
          label="Go to products"
          image={products5}
          alt="voorbeeld"
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
          image={products6}
          width={800}
          height={600}
          alt="voorbeeld"
        />
      </Flex>
    </>
  );
}
