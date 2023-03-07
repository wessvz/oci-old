import styles from "./Header.module.css";
import Image from "next/image";
import oci from "../../public/images/oci-frame.svg";

export default function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copyWrapper}>
          <figure className={styles.figure}>
            <Image alt="OCI" src={oci} className={styles.svg} />
          </figure>
          <h2 className={styles.title}>
            Moving markets with meaningful innovations.
          </h2>
          <p className={styles.copy}>
            We believe that sustainability, innovation and quality are critical
            components of our customers success. That's why we are committed to
            providing the energy and water industry with outstanding products
            and solutions. We are proud of our reputation as a customer-centric
            and trustworthy supplier.
          </p>
        </div>
      </div>
    </section>
  );
}
