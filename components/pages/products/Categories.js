import styles from "./Categories.module.css";
import { connections, fittings, valves, piping, hoses, plastics } from "./Copy";
import Image from "next/image";
import fitting from "@/public/images/products/fitting-oci.webp";
import valve from "@/public/images/products/valves-oci.webp";
import connectionsystem from "@/public/images/products/connection-system-oci.jpg";
import connectionsystemDesktop from "@/public/images/products/connection-system-oci-desktop.jpg";
import connectionsystemMobile from "@/public/images/products/connection-system-mobile.jpg";
import connection from "@/public/images/products/connection-oci.webp";
import fittingOud from "@/public/images/products/fitting-2.jpg";
import fittingProduct from "@/public/images/products/fitting.jpg";
import metalhoses from "@/public/images/products/metaalslang.jpg";
import plasticProduct from "@/public/images/products/kunstof.jpg";
import valvesProduct from "@/public/images/products/kogelkraan.jpg";
import apple from "@/public/images/products/example-1.jpg";
import pear from "@/public/images/products/example-4.jpg";
import Dialog from "@/components/pages/products/Modal";
import Title from "./Title";

export default function Categories() {
  return (
    <>
      <div className={styles.grid}>
        <section className={styles.connection}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
              <h2 className={styles.eyebrow}>Connection systems</h2>
              <h3 className={styles.title}>Install meters without effort</h3>
              <p className={styles.desc}>
                We provide components and solutions for the installation of gas,
                water, drinking water and electricity meters.
              </p>
              <Dialog category="Connection systems" description={connections} />
            </div>
          </div>
          <Image
            alt="Connection Systems"
            src={connectionsystemDesktop}
            sizes="100vh"
            className={styles.desktopImage}
          />
          <Image
            alt="Connection Systems"
            src={connectionsystemMobile}
            sizes="100vh"
            className={styles.mobileImage}
          />
        </section>
        <section className={styles.fitting}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
              <h2 className={styles.eyebrow}>Fittings</h2>
              <h3 className={styles.title}>More than 2000 products</h3>
              <p className={styles.desc}>
                A complete range that meets all requirements and needs in the
                field of connection technology.
              </p>
              <Dialog category="Fittings" description={fittings} />
            </div>
          </div>
          <div className={styles.imageColumn}>
            <Image
              alt="voorbeeld"
              src={fitting}
              sizes="100vh"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.valve}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
              <h2 className={styles.eyebrow}>Valves</h2>
              <h3 className={styles.title}>Innovative designs</h3>
              <p className={styles.desc}>
                Designed to perform in any environment. Engineered to withstand
                extreme temperatures and pressures.
              </p>
              <Dialog category="Valves" description={valves} />
            </div>
          </div>
          <div className={styles.imageColumn}>
            <Image
              alt="Valves"
              src={valve}
              sizes="100vh"
              className={styles.image}
            />
          </div>
        </section>
      </div>

      <Title />

      <div className={styles.grid}>
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
            <Dialog category="Piping systems" description={piping} />
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
              Tackling complex conditions with customized solutions. Experience
              the flexibel possibilities of metal hoses.
            </p>
            <Dialog category="Metal hoses" description={hoses} />
          </div>
          <Image
            alt="voorbeeld"
            src={metalhoses}
            sizes="100vw"
            className={styles.imageOud}
          />
        </section>
        <section className={styles.six}>
          <div className={styles.content}>
            <h2 className={styles.eyebrow}>Plastics and rubber</h2>
            <h3 className={styles.title}>From idea to realized product</h3>
            <p className={styles.desc}>
              Transform your ideas into reality with our end-to-end product
              development expertise in plastics and rubber.
            </p>
            <Dialog category="Plastics and rubber" description={plastics} />
          </div>
          <Image
            alt="voorbeeld"
            src={plasticProduct}
            sizes="100vw"
            className={styles.imageOud}
          />
        </section>
      </div>
    </>
  );
}
