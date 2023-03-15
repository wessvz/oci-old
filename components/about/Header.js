import styles from "./Header.module.css";
import Image from "next/image";
import oci from "../../public/images/oci-frame.svg";
import Description from "../shared/Description";

export default function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <Image alt="OCI" src={oci} className={styles.svg} />
        </figure>
        <h2 className={styles.title}>
          Connecting <br /> energy and water
        </h2>
        <Description
          copy="We believe that sustainability, innovation and quality are critical
          components of our customers' success. That's why we are committed to
          providing the energy and water industry with outstanding products and
          solutions."
        />
      </div>
    </section>
  );
}
