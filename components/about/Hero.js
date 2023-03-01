import styles from "./Hero.module.css";
import Image from "next/image";
import voorbeeld from "../../public/images/voorbeeld.webp";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image alt="Voorbeeld" src={voorbeeld} className={styles.image} />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>About us</h1>
          <p className={styles.subtitle}>
            OCI develops innovative solutions for connecting energy and water
            networks. Our mission is to simplify and streamline the work of our
            users.
          </p>
        </div>
      </div>
    </section>
  );
}
