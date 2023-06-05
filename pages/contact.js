import GlobalHead from "@/components/layout/head/GlobalHead";
import Hero from "../components/pages/contact/Hero";
import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Headline from "@/components/pages/contact/Headline";
import Panel from "@/components/pages/contact/Panel";
import ContactForm from "@/components/pages/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <GlobalHead
        title="Contact OCI | Smart solutions for energy and water grids"
        description="Contact OCI today to explore smart solutions for connecting energy and water grids. We are here to assist you with our expertise and innovative products."
        keywords="OCI contact "
        name="Contact OCI"
        url="https://www.ocibv.nl/contact"
      />
      <Hero />
      <Container>
        <Flex style={5}>
          <Headline />
          <Panel />
          <ContactForm />
        </Flex>
      </Container>
    </>
  );
}
