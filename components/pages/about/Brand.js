import styles from "./Brand.module.css";
import Image from "next/image";
import products from "@/public/images/about/oci-products.jpg";
import productsBig from "@/public/images/about/products-big-2.jpg";
import Modal from "./ModalBrand";
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
              headline="We empower our users by simplifying and streamlining their work."
              copy={mission}
              className="brand"
            />
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image
                alt="Pipes"
                src={products}
                className={styles.image}
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image
                alt="Innovation"
                src={productsBig}
                className={styles.image}
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className={styles.red}>
            <h3 className={styles.headline}>
              We aspire to contribute to a sustainable energy and water system.
            </h3>
            <Modal
              headline="How OCI is contributing to a sustainable energy and water system."
              copy={goal}
              className="brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
