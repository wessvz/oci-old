import styles from "./Hero.module.css";
import Player from "./VideoPlayer";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.mediaContainer}>
        <Player />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
