import styles from "./Categories.module.css";
import Image from "next/image";
import Dialog from "@/components/pages/products/Modal";
import { connections, fittings, valves, piping, hoses, plastics } from "./Copy";
import connectionsystemDesk from "@/public/images/products/connection-system-oci-desk.webp";
import connectionsystemMob from "@/public/images/products/connection-system-mob-oci.webp";
import connectionsystemMobile from "@/public/images/products/connection-system-mobile.jpg";
import pipingsystemDesktop from "@/public/images/products/piping-system-oci.jpg";
import fitting from "@/public/images/products/fitting-oci.webp";
import valve from "@/public/images/products/valves-oci.webp";
import metalhoses from "@/public/images/products/metal-hoses-oci.webp";
import plasticProduct from "@/public/images/products/kunstof.jpg";

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
            alt="OCI - Connection Systems"
            src={connectionsystemDesk}
            sizes="100vh"
            className={styles.desktopImage}
          />
          <Image
            alt="OCI - Connection Systems"
            src={connectionsystemMob}
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
              alt="OCI - Fittings"
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
              alt="OCI - Valves"
              src={valve}
              sizes="100vh"
              className={styles.image}
            />
          </div>
        </section>
      </div>

      <Title />

      <div className={styles.grid}>
        <section className={styles.piping}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
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
          </div>
          <Image
            alt="OCI - Piping Systems"
            src={pipingsystemDesktop}
            sizes="100vw"
            className={styles.desktopImage}
          />
          <Image
            alt="OCI - Piping Systems"
            src={connectionsystemMobile}
            sizes="100vh"
            className={styles.mobileImage}
          />
        </section>

        <section className={styles.hoses}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
              <h2 className={styles.eyebrow}>Metal hoses</h2>
              <h3 className={styles.title}>Tailored solutions</h3>
              <p className={styles.desc}>
                Tackling complex conditions with customized solutions.
                Experience the flexibel possibilities of metal hoses.
              </p>
              <Dialog category="Metal hoses" description={hoses} />
            </div>
          </div>
          <div className={styles.imageColumn}>
            <Image
              alt="metal hoses"
              src={metalhoses}
              sizes="100vh"
              className={styles.image}
            />
          </div>
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
