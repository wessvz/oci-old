import Head from "next/head";
import Hero from "@/components/hero/Resources";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Wrapper from "@/components/layout/Wrapper";
import Accordion from "@/components/pages/resources/TermsAccordion";

export default function Terms() {
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

      <Hero title="Terms and Conditions" />

      <Section style={4}>
        <Wrapper style={1}>
          <Title style={4}>Introduction</Title>
          <Copy style={1}>
            These general terms and conditions were filed with the Chamber of
            Commerce on October 31, 2019 and apply to the sales and deliveries
            of OCI B.V.
          </Copy>
        </Wrapper>
        <Wrapper style={3}>
          <Accordion />
        </Wrapper>
      </Section>
    </>
  );
}
