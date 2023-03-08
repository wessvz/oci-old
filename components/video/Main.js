import styles from "./Main.module.css";
import Image from "next/image";
import LargeButton from "../button/LargeButton";
import voorbeeld from "../../public/images/voorbeeld.jpg";
import tuin from "../../public/images/voorbeeld-3.jpg";
import tekening from "../../public/images/oci-header-voorbeeld.jpg";
import machine from "../../public/images/voorbeeld-5.jpg";
import Player from "./Player";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Player />
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
