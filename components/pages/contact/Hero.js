import styles from "./Hero.module.css";
import Image from "next/image";
import oci from "@/public/images/contact/sustainable-living.jpg";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image
              alt="Sustainable building"
              src={oci}
              className={styles.image}
              width={1920}
              height={560}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
