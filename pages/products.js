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
        title="OCI Products - Ball valves, fittings, piping systems & more"
        description="Discover our extensive range of ball valves, fittings, pipelines and a sophisticated range of plastic products and installation materials."
        keywords="OCI products, piping systems, fittings, ball valves, connection systems, metal hoses"
        name="OCI Products"
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
