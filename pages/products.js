import styles from "@/styles/Products.module.css";
import Head from "next/head";
import Headline from "@/components/products/Headline";
import Hero from "@/components/products/Hero";
import Overview from "@/components/products/Overview";
import Cta from "@/components/products/Cta";

export default function Products() {
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
          <Headline />
          <Overview />
          <Cta />
        </div>
      </main>
    </div>
  );
}
