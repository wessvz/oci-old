import Image from "next/image";
import styles from "./Brand.module.css";
import Section from "@/components/layout/Section";
import Modal from "./ModalBrand";
import products from "@/public/images/about/oci-products.jpg";
import innovation from "@/public/images/about/products-big-2.jpg";
import { mission, goal } from "./Copy";

export default function Brand() {
  return (
    <Section style={5}>
      <div className={styles.flex}>
        <div className={styles.mission}>
          <div className={styles.contentWrapper}>
            <h3 className={styles.headline}>
              Our mission is to simplify and streamline the work of our users.
            </h3>
            <Modal
              headline="We simplify and streamline your work."
              copy={mission}
              className="brand"
            />
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Some products of OCI"
              src={products}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
        <div className={styles.goal}>
          <div className={styles.contentWrapper}>
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
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Some products of OCI"
              src={innovation}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
