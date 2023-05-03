import Image from "next/image";
import styles from "./Goal.module.css";
import Section from "@/components/layout/Section";
import Modal from "./ModalBrand";
import { goal } from "./Copy";
import products from "@/public/images/about/oci-products.jpg";

export default function Goal() {
  return (
    <Section style={5}>
      <div className={styles.flex}>
        <div className={styles.content}>
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
              alt="Pipes"
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
      </div>
    </Section>
  );
}
