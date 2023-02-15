import styles from "@/styles/Products.module.css";
import Head from "next/head";
import General from "@/components/hero/General";
import Product from "@/components/layout/content/Product";
import magazijn from "@/public/images/magazijn.webp";
import products from "@/public/images/product.webp";

export default function Products() {
  return (
    <div>
      <Head>
        <title>OCI BV | Smart solutions for energy and water networks</title>
        <meta name="description" content="Welkom bij OCI BV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <General
          title="Products overview"
          subtitle="OCI delivers innovative and sustainable solutions for connecting energy and water networks to homes, offices and industrial sites."
        />
        <section className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.one}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Connection systems</h2>
                <h3 className={styles.title}>Install meters without effort</h3>
                <p className={styles.desc}>
                  We provide components and solutions for the installation of
                  gas, water, drinking water and electricity meters.
                </p>
              </div>
            </div>
            <div className={styles.two}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Fittings</h2>
                <h3 className={styles.title}>More than 2000 products</h3>
                <p className={styles.desc}>
                  A complete range that meets all requirements and needs in the
                  field of connection technology.
                </p>
              </div>
            </div>
            <div className={styles.three}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Valves</h2>
                <h3 className={styles.title}>Innovative designs</h3>
                <p className={styles.desc}>
                  Designed to withstand extreme temperatures and pressures.
                  Engineered to perform seamlessly in any environment.
                </p>
              </div>
            </div>
            <div className={styles.four}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Piping systems</h2>
                <h3 className={styles.title}>
                  Flexibility as the guiding principle
                </h3>
                <p className={styles.desc}>
                  Save time and increase efficiency with gas and heat pipelines
                  optimized for challenging installation environments.
                </p>
              </div>
            </div>
            <div className={styles.five}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Metal hoses</h2>
                <h3 className={styles.title}>Tailored solutions</h3>
                <p className={styles.desc}>
                  Tackling complex conditions with customized solutions.
                  Experience the flexibel possibilities of metal hoses.
                </p>
              </div>
            </div>
            <div className={styles.six}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Plastics and rubber</h2>
                <h3 className={styles.title}>From idea to realised product</h3>
                <p className={styles.desc}>
                  Transform your ideas into reality with our end-to-end product
                  development expertise in plastics and rubber.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
