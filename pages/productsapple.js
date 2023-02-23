import styles from "@/styles/Productsapple.module.css";
import Head from "next/head";
import General from "@/components/hero/General";
import Image from "next/image";
import apple from "../public/images/products/example-1.jpg";
import apples from "../public/images/products/example-2.jpg";
import applez from "../public/images/products/example-3.jpg";
import pear from "../public/images/products/example-4.jpg";
import strawberry from "../public/images/products/example-5.jpg";
import Dialog from "@/components/products/Modal";

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
        <div className={styles.container}>
          <div className={styles.grid}>
            <section className={styles.one}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Connection systems</h2>
                <h3 className={styles.title}>Install meters without effort</h3>
                <p className={styles.desc}>
                  We provide components and solutions for the installation of
                  gas, water, drinking water and electricity meters.
                </p>
                <Dialog
                  title="Connection systems"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={apple}
                sizes="100vw"
                className={styles.imagez}
              />
            </section>
            <section className={styles.two}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Fittings</h2>
                <h3 className={styles.title}>More than 2000 products</h3>
                <p className={styles.desc}>
                  A complete range that meets all requirements and needs in the
                  field of connection technology.
                </p>
                <Dialog
                  title="Fittings"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={applez}
                sizes="100vw"
                className={styles.image}
              />
            </section>
            <section className={styles.three}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Valves</h2>
                <h3 className={styles.title}>Innovative designs</h3>
                <p className={styles.desc}>
                  Designed to withstand extreme temperatures and pressures.
                  Engineered to perform seamlessly in any environment.
                </p>
                <Dialog
                  title="Valves"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={apples}
                sizes="100vw"
                className={styles.image}
              />
            </section>
            <section className={styles.four}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Piping systems</h2>
                <h3 className={styles.title}>
                  Flexibility as the guiding principle
                </h3>
                <p className={styles.desc}>
                  Save time and increase efficiency with gas and heat pipelines
                  optimized for challenging installation environments.
                </p>
                <Dialog
                  title="Piping systems"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={pear}
                sizes="100vw"
                className={styles.imagez}
              />
            </section>
            <section className={styles.five}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Metal hoses</h2>
                <h3 className={styles.title}>Tailored solutions</h3>
                <p className={styles.desc}>
                  Tackling complex conditions with customized solutions.
                  Experience the flexibel possibilities of metal hoses.
                </p>
                <Dialog
                  title="Metal hoses"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={apples}
                sizes="100vw"
                className={styles.image}
              />
            </section>
            <section className={styles.six}>
              <div className={styles.content}>
                <h2 className={styles.eyebrow}>Plastics and rubber</h2>
                <h3 className={styles.title}>From idea to realised product</h3>
                <p className={styles.desc}>
                  Transform your ideas into reality with our end-to-end product
                  development expertise in plastics and rubber.
                </p>
                <Dialog
                  title="Plastics and rubber"
                  text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
                />
              </div>
              <Image
                alt="voorbeeld"
                src={strawberry}
                sizes="100vw"
                className={styles.image}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
