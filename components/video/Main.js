import styles from "./Main.module.css";
import Player from "./Player";
import LargeButton from "../button/LargeButton";
import imageDesktop from "@/public/images/home/placeholder.jpg";

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.mediaContainer}>
        <Player
          imageDesktop={imageDesktop}
          videoMobile="/video/home-mobile.mp4"
          videoDesktop="/video/home-desktop.mp4"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Working together on smart energy solutions
          </h1>
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
