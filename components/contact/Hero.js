import styles from "./Hero.module.css";
import Image from "next/image";
import LargeButton from "../button/LargeButton";
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
          <h1 className={styles.title}>Contact us</h1>
          <p className={styles.subtitle}>
            Need assistance? We're here to help. Please reach out to us using
            the contact information below.
          </p>
        </div>
      </div>
    </section>
  );
}
