import styles from "./Brand.module.css";
import Image from "next/image";
import contact from "@/public/images/contact-placeholder.png";
import pipes from "@/public/images/about/pipes.jpg";
import products from "@/public/images/about/products.jpg";
import connection from "@/public/images/about/connection.jpg";
import product1 from "@/public/images/about/product-test.jpg";
import innovation from "@/public/images/about/innovation.jpg";
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
              headline="Our mission is to simplify and streamline the work of our users."
              copy={mission}
              className="brand"
            />
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image alt="Pipes" src={product1} className={styles.image} />
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.imageWrapper}>
              <Image
                alt="Innovation"
                src={innovation}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.red}>
            <h3 className={styles.headline}>
              We aspire to contribute to a sustainable energy and water system.
            </h3>
            <Modal
              headline="We aspire to contribute to a sustainable energy and water system."
              copy={goal}
              className="brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
