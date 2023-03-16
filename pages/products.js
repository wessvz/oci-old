import styles from "@/styles/Products.module.css";
import Head from "next/head";
import Headline from "@/components/pages/products/Headline";
import Hero from "@/components/video/Hero";
import Categories from "@/components/pages/products/Categories";
import Cta from "@/components/pages/products/Cta";

export default function Products() {
  return (
    <>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.container}>
        <Headline />
        <Categories />
        <Cta />
      </div>
    </>
  );
}
