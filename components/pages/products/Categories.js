import styles from "./Categories.module.css";
import Image from "next/image";
import useWindowSize from "@/lib/hooks/useWindowSize";
import Dialog from "@/components/pages/products/Modal";
import { connections, fittings, valves, piping, hoses, plastics } from "./Copy";
import connectionsystemDesk from "@/public/images/products/connection-system-oci-desk.jpg";
import connectionsystemTab from "@/public/images/products/connection-system-tab.jpg";
import connectionsystemDesktop from "@/public/images/products/connection-system-oci-desk.webp";
import connectionsystemMob from "@/public/images/products/connection-system-mob-oci.webp";
import pipingsystemDesktop from "@/public/images/products/piping-system-oci.jpg";
import pipingsystemMob2 from "@/public/images/products/piping-system-mob-oci.jpg";
import fitting from "@/public/images/products/fitting-oci.webp";
import valve from "@/public/images/products/valves-oci.webp";
import metalhoses from "@/public/images/products/metal-hoses-oci.webp";
import plastic from "@/public/images/products/plastics-oci.jpg";
import Title from "./Title";

export default function Categories() {
  const { isMobile, isTablet, isDesktop } = useWindowSize({
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
  });
  return (
    <>
      <div className={styles.top}>
        <section className={styles.connection}>
          <div className={styles.copyColumn}>
            <div className={`${styles.copyWrapper} ${styles.extraPadding}`}>
              <h2 className={styles.eyebrow}>Connection systems</h2>
              <h3 className={styles.title}>Install meters without effort</h3>
              <p className={styles.desc}>
                We provide components and solutions for the installation of gas,
                water, drinking water and electricity meters.
              </p>
              <Dialog category="Connection systems" description={connections} />
            </div>
          </div>
          <div
            className={`${styles.imageColumn} ${
              isMobile || isTablet ? styles.centeredImageColumn : ""
            }`}
          >
            {isMobile && (
              <Image
                alt="OCI - Connection Systems"
                src={connectionsystemMob}
                className={styles.image}
              />
            )}
            {isTablet && (
              <Image
                alt="OCI - Connection Systems"
                src={connectionsystemTab}
                className={styles.image}
              />
            )}
            {isDesktop && (
              <Image
                alt="OCI - Connection Systems"
                src={connectionsystemDesk}
                className={styles.image}
              />
            )}
          </div>
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
                high temperatures and pressures.
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

      <div className={styles.bottom}>
        <section className={styles.piping}>
          <div className={styles.copyColumn}>
            <div className={`${styles.copyWrapper} ${styles.extraPadding}`}>
              <h2 className={styles.eyebrow}>Piping systems</h2>
              <h3 className={styles.title}>
                Flexibility as the guiding principle
              </h3>
              <p className={styles.desc}>
                Save time and increase efficiency with gas and heat pipelines
                optimized for challenging installation applications.
              </p>
              <Dialog category="Piping systems" description={piping} />
            </div>
          </div>
          <div className={styles.imageColumn}>
            {isMobile && (
              <Image
                alt="OCI - Piping Systems"
                src={pipingsystemMob2}
                className={styles.image}
              />
            )}
            {isTablet && (
              <Image
                alt="OCI - Piping Systems"
                src={pipingsystemMob2}
                className={styles.image}
              />
            )}
            {isDesktop && (
              <Image
                alt="OCI - Piping Systems"
                src={pipingsystemDesktop}
                className={styles.pipingDesk}
              />
            )}
          </div>
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

        <section className={styles.plastics}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
              <h2 className={styles.eyebrow}>Plastics and rubber</h2>
              <h3 className={styles.title}>From idea to realized product</h3>
              <p className={styles.desc}>
                Transform your ideas into reality with our product development
                power in plastics and rubber.
              </p>
              <Dialog category="Plastics and rubber" description={plastics} />
            </div>
          </div>
          <div className={styles.imageColumn}>
            <Image
              alt="OCI - Valves"
              src={plastic}
              sizes="100vh"
              className={styles.image}
            />
          </div>
        </section>
      </div>
    </>
  );
}
