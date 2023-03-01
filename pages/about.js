import styles from "../styles/About.module.css";
import Head from "next/head";
import Hero from "../components/about/Hero";
import Facts from "@/components/about/Facts";
import Film from "@/components/about/Film";
import Values from "@/components/about/Values";
import Overview from "@/components/about/Overview";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="About OCI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Hero />

        <div className={styles.container}>
          <div className={styles.grid}>
            <section className={styles.first}>
              <h2 className={styles.title}>This is OCI</h2>
            </section>
            <section className={styles.second}>
              <h2 className={styles.title}>This is OCI</h2>
            </section>
            <section className={styles.third}>
              <h2 className={styles.facts}>Company facts</h2>
              <Facts />
            </section>
          </div>
        </div>
        <Overview />
        <Values />
        <Film />
      </main>
    </div>
  );
}
