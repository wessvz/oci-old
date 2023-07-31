import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "@/components/pages/resources/Hero";
import Section from "@/components/layout/Section";
import Copy from "@/components/layout/Copy";
import Title from "@/components/layout/Title";
import Wrapper from "@/components/layout/Wrapper";
import Accordion from "@/components/pages/resources/TermsAccordion";

export default function Terms() {
  return (
    <>
      <GlobalHead
        title="Terms and Conditions - OCI"
        description="Read and understand the terms and conditions that govern the relationship between us and our customers."
        keywords="terms and conditions, legal"
        name="Terms and Conditions - OCI"
        url="https://www.ocibv.nl/terms"
        robots="noindex, nofollow"
      />

      <Hero title="Terms and Conditions" />

      <Section style={6}>
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
