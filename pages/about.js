import styles from "../styles/About.module.css";
import Head from "next/head";
import Hero from "../components/pages/about/Hero";
import Film from "@/components/pages/about/Film";
import Values from "@/components/pages/about/Values";
import Headline from "@/components/pages/about/Headline";
import Brand from "@/components/pages/about/Mission";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="About OCI" />
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
      <Headline />
      <Brand />
      <Values />
      <Film />
    </div>
  );
}
