import styles from "./Hero.module.css";
import Image from "next/image";
import oci from "@/public/images/about/oci-malden-achtergrond.jpg";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image
              alt="OCI bv location in Malden, the Netherlands"
              src={oci}
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
