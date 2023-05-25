import GlobalHead from "@/components/layout/head/GlobalHead";
import Headline from "@/components/pages/products/Headline";
import Hero from "@/components/video/Hero";
import Products from "@/components/pages/products/Categories";
import Cta from "@/components/pages/products/Cta";
import Container from "@/components/layout/Container";

export default function ProductsPage() {
  return (
    <>
      <GlobalHead
        title="OCI | Smart solutions for energy and water networks"
        description="Explore our range of products for energy and water networks."
        keywords="OCI products, connection systems, fittings, ball valves, piping systems, metal hoses"
        name="OCI Products"
        type="WebPage"
        url="https://www.ocibv.nl/products"
      />
      <Hero />
      <Container>
        <Headline />
        <Products />
        <Cta />
      </Container>
    </>
  );
}
