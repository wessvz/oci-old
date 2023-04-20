import styles from "./Resources.module.css";
import Image from "next/image";
import voorbeeld from "../../public/images/oci-header-voorbeeld.jpg";

export default function General({ title }) {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.view}>
          <div className={styles.imageContainer}>
            <Image
              alt="Voorbeeld"
              src={voorbeeld}
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
