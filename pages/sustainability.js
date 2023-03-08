import styles from "../styles/Sustainability.module.css";
import Head from "next/head";
import magazijn from "@/public/images/magazijn.webp";
import products from "@/public/images/product.webp";
import Product from "@/components/layout/content/ProductOption";
import General from "@/components/hero/General";
import Hero from "@/components/video/Player";
import Main from "@/components/video/Main";
import Player from "@/components/video/Player";

export default function Sustainability() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Main />
        <div className={styles.test}></div>
        <section className={styles.container}>
          <Product
            kicker="Energy"
            title="Valves and fittings"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={products}
            alt="Products made by OCI"
          />
          <Product
            order="reverse"
            kicker="Water"
            title="Installation systems"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={magazijn}
            alt="Products made by OCI"
          />
          <Product
            kicker="Gas"
            title="Pipes and hoses"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={products}
            alt="Products made by OCI"
          />
          <Product
            order="reverse"
            kicker="Liquids"
            title="Refurbished products"
            copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
            image={magazijn}
            alt="Products made by OCI"
          />
        </section>
      </main>
    </div>
  );
}
