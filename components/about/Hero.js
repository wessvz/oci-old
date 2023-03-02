import styles from "./Hero.module.css";
import Image from "next/image";
import voorbeeld from "../../public/images/voorbeeld.webp";

export default function Hero() {
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
    </section>
  );
}
