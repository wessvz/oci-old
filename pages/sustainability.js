import styles from "../styles/Sustainability.module.css";
import Head from "next/head";
import Hero from "@/components/video/Main";

export default function Sustainability() {
  return (
    <>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
}
