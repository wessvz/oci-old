import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Head from "next/head";
import Hero from "../components/pages/contact/Hero";
import ContactForm from "@/components/pages/contact/ContactForm";
import Item from "@/components/pages/contact/Item";
import { Phone, Envelope } from "@/public/icons/General";
import logo from "@/public/images/logo-oci-dark.svg";
import productPlaceholder1 from "@/public/images/about/product-placeholder.webp";
import productPlaceholder6 from "@/public/images/about/product-placeholder-6.webp";
import Headline from "@/components/pages/contact/Headline";
import Container from "@/components/layout/Container";
import products1 from "@/public/images/home/products-oci-1.jpg";
import products2 from "@/public/images/home/products-oci-2.jpg";

export default function ContactPage() {
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
