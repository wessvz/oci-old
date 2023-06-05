import styles from "./Hero.module.css";
import Image from "next/image";
import drawing from "@/public/images/resources/technical-drawing.jpg";

export default function General({ title }) {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image
              alt="Technical drawing"
              src={drawing}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
