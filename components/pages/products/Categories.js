import styles from "./Categories.module.css";
import Image from "next/image";
import fitting from "@/public/images/products/fitting-2.jpg";
import fittings from "@/public/images/products/fitting.jpg";
import metalhoses from "@/public/images/products/metaalslang.jpg";
import plastics from "@/public/images/products/kunstof.jpg";
import valves from "@/public/images/products/kogelkraan.jpg";
import apple from "@/public/images/products/example-1.jpg";
import pear from "@/public/images/products/example-4.jpg";
import Dialog from "@/components/pages/products/Modal";
import Title from "./Title";

export default function Categories() {
  return (
    <>
      <div className={styles.grid}>
        <section className={styles.one}>
          <div className={styles.content}>
            <h2 className={styles.eyebrow}>Connection systems</h2>
            <h3 className={styles.title}>Install meters without effort</h3>
            <p className={styles.desc}>
              We provide components and solutions for the installation of gas,
              water, drinking water and electricity meters.
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
        <section className={styles.contentWrapper}>
          <div className={styles.copyColumn}>
            <div className={styles.copyWrapper}>
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
          </div>
          <div className={styles.imageColumn}>
            <Image
              alt="voorbeeld"
              src={fitting}
              sizes="100vh"
              className={styles.imagetest}
            />
          </div>
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
            src={valves}
            sizes="100vw"
            className={styles.image}
          />
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
              Tackling complex conditions with customized solutions. Experience
              the flexibel possibilities of metal hoses.
            </p>
            <Dialog
              title="Metal hoses"
              text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
            />
          </div>
          <Image
            alt="voorbeeld"
            src={metalhoses}
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
            src={plastics}
            sizes="100vw"
            className={styles.image}
          />
        </section>
      </div>
    </>
  );
}