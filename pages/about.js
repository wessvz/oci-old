import styles from "../styles/About.module.css";
import Head from "next/head";
import Hero from "../components/pages/about/Hero";
import Film from "@/components/pages/about/Film";
import Values from "@/components/pages/about/Values";
import Brand from "@/components/pages/about/Brand";
import Headline from "@/components/pages/about/Headline";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="About OCI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Headline />
      <Brand />
      <Values />
      <Film />
    </div>
  );
}
