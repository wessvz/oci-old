import styles from "../styles/About.module.css";
import Head from "next/head";
import Hero from "../components/about/Hero";
import Film from "@/components/about/Film";
import Values from "@/components/about/Values";
import Brand from "@/components/about/Brand";
import Headline from "@/components/about/Headline";

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
