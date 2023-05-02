import styles from "./Hero.module.css";
import Player from "./Player";
import placeholderMobile from "@/public/images/products/placeholder-mobile.jpg";
import placeholderDesktop from "@/public/images/products/placeholder-desktop.jpg";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.mediaContainer}>
        <Player
          imageMobile={placeholderMobile}
          imageDesktop={placeholderDesktop}
          videoMobile="/video/products-mobile.mp4"
          videoDesktop="/video/products-desktop.mp4"
        />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
