import styles from "../styles/Contact.module.css";
import Head from "next/head";
import Hero from "../components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import contact from "@/public/images/contact-placeholder.png";
import Item from "@/components/contact/Item";
import { Phone, Envelope } from "@/public/icons/General";

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
                <h2 className={styles.name}>OCI</h2>
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
                  src={contact}
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
                  src={contact}
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
