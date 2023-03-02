import styles from "../styles/About.module.css";
import Head from "next/head";
import Hero from "../components/about/Hero";
import Film from "@/components/about/Film";
import Values from "@/components/about/Values";
import Brand from "@/components/about/Brand";
import Header from "@/components/about/Header";

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
        <Header />
        <Brand />
        <Values />
        <Film />
      </main>
    </div>
  );
}
