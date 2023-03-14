import styles from "./New.module.css";
import Player from "./Player";
import LargeButton from "../button/LargeButton";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.mediaContainer}>
        <Player />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.contentContainer}>
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
