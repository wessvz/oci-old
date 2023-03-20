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
      <div className={styles.container}>
        <Headline />
        <Categories />
        <Cta />
      </div>
    </>
  );
}
