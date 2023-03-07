import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Head from "next/head";
import Hero from "../components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import Item from "@/components/contact/Item";
import { Phone, Envelope } from "@/public/icons/General";
import logo from "@/public/images/oci-dark.svg";
import applePlaceholder from "@/public/images/about/contact-placeholder.png";
import applePlaceholder1 from "@/public/images/about/apple-placeholder.jpg";
import productPlaceholder1 from "@/public/images/about/product-placeholder.jpg";
import productPlaceholder2 from "@/public/images/about/product-placeholder-2.jpg";
import productPlaceholder3 from "@/public/images/about/product-placeholder-4.jpg";
import productPlaceholder4 from "@/public/images/about/voorbeeld-product.jpg";
import productPlaceholder5 from "@/public/images/about/product-placeholder5.jpg";
import oci from "@/public/images/about/oci-malden.jpg";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Hero />

        <div className={styles.container}>
          <ContactForm />
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
                  src={applePlaceholder}
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
                  src={productPlaceholder1}
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
        </div>
      </main>
    </div>
  );
}
