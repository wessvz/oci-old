import styles from "./Brand.module.css";
import Image from "next/image";
import contact from "@/public/images/contact-placeholder.png";
import Modal from "./Info";
import { mission, goal } from "./Copy";

export default function Brand() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.red}>
            <h3 className={styles.headline}>
              Our mission is to simplify and streamline the work of our users.
            </h3>
            <Modal
              title="Our mission is to simplify and streamline the work of our users."
              copy={mission}
            />
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image
                alt="OCI BV, De Hoge Brug 14, 6581 AJ Malden"
                src={contact}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image
                alt="OCI BV, De Hoge Brug 14, 6581 AJ Malden"
                src={contact}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.red}>
            <h3 className={styles.headline}>
              We aspire to contribute to a sustainable energy system.
            </h3>
            <Modal
              title="We aspire to contribute to a sustainable energy system."
              copy={goal}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
