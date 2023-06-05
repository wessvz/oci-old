import styles from "../styles/Contact.module.css";
import GlobalHead from "@/components/layout/head/GlobalHead";
import Image from "next/image";
import Hero from "../components/pages/contact/Hero";
import ContactForm from "@/components/pages/contact/ContactForm";
import Item from "@/components/pages/contact/Item";
import { Phone, Envelope } from "@/public/icons/General";
import logo from "@/public/images/logo-oci-dark.svg";
import Headline from "@/components/pages/contact/Headline";
import Container from "@/components/layout/Container";
import products1 from "@/public/images/home/products-oci-1.jpg";
import products2 from "@/public/images/contact/oci-connection-system.jpg";

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
        <div className={styles.flex}>
          <Headline />
          <section className={styles.panel}>
            <div className={styles.copyColumn}>
              <div className={styles.company}>
                <Image alt="OCI" src={logo} className={styles.svg} />
                <span className={styles.group}>An Indutrade company</span>
              </div>
              <address className={styles.details}>
                De Hoge Brug 14
                <br />
                6581 AJ Malden
                <br />
                Netherlands
              </address>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="OCI BV, De Hoge Brug 14, 6581 AJ Malden"
                  src={products1}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  alt="OCI BV, De Hoge Brug 14, 6581 AJ Malden"
                  src={products2}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
            </div>
            <div className={styles.copyColumn}>
              <div className={styles.company}>
                <h2 className={styles.title}>General communication</h2>
              </div>
              <div className={styles.communication}>
                <Item
                  href="mailto:info@ocibv.nl"
                  contact="info@ocibv.nl"
                  icon={<Envelope />}
                />
                <Item
                  href="tel:+31243733833"
                  contact="+31 (0)24 373 3833"
                  icon={<Phone />}
                />
              </div>
            </div>
          </section>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
