import styles from "../styles/Home.module.css";
import Head from "next/head";
import Main from "../components/hero/Main";
import magazijn from "@/public/images/magazijn.webp";
import products from "@/public/images/product.webp";
import Panel from "@/components/layout/content/Panel";
import Proposition from "@/components/section/Proposition";
import Title from "@/components/section/Title";

export default function Home() {
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

      <Main />

      <Title
        kicker="Specialty"
        title="Customized assemblies"
        copy="Smart solutions for connecting energy and water grids to domestic homes, office buildings and industrial sites."
      />
      <section className={styles.container}>
        <Panel
          kicker="Products"
          title="How we make a difference"
          copy="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
          image={magazijn}
          alt="Products made by OCI"
          buttonText="Learn more"
          link="/products"
        />
        <Panel
          order="reverse"
          kicker="Company"
          title="Discover the world of OCI"
          copy="Efficiency and sustainability at the forefront. Innovating to transform markets, that's OCI's mission."
          image={products}
          alt="Products made by OCI"
          buttonText="Read more"
          link="/sustainability"
        />
      </section>
      <Proposition />
      <Title
        kicker="What drives us"
        title="Strong relationships"
        copy="Creating sustainable impact by delivering unique value to our customers, partners and employees."
      />
      <section className={styles.container}>
        <Panel
          order="reverse"
          kicker="People"
          title="The heart of social entrepreneurship"
          copy="We strive for a better society and believe that every person is equal. No one is more or less than the other. We may therefore call ourselves a PSO 30+ company."
          image={magazijn}
          alt="Products made by OCI"
          buttonText="Learn more"
          link="/about"
        />
        <Panel
          kicker="Sustainability"
          title="Together we create change"
          copy="The transition to sustainability will inevitably impact all of our clients and partners. We are dedicated to providing support and guidance to navigate this transformative period/"
          image={products}
          alt="Products made by OCI"
          buttonText="Read more"
          link="/sustainability"
        />
      </section>
    </>
  );
}
