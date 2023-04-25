import styles from "./Main.module.css";
import Image from "next/image";
import LargeButton from "../button/LargeButton";
import machine from "../../public/images/voorbeeld-5.jpg";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image alt="Voorbeeld" src={machine} className={styles.image} />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Working together on smart solutions</h1>
          <p className={styles.subtitle}>
            Innovative and sustainable thinking is the driving force behind
            OCI's production and development
          </p>
          <div className={styles.buttons}>
            <LargeButton buttonText="What we do" link="/products" />
          </div>
        </div>
      </div>
    </section>
  );
}
