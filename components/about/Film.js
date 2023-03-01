import styles from "./Film.module.css";
import Image from "next/image";
import device from "../../public/images/device.png";
import film from "../../public/images/film-start.jpg";

export default function Film() {
  return (
    <section className={styles.section}>
      <div className={styles.copyWrapper}>
        <h2 className={styles.title}>
          Step inside our company by taking a virtual tour.
        </h2>
      </div>
      <div className={styles.filmContainer}>
        <div className={styles.deviceWrapper}>
          <Image alt="OCI" src={device} className={styles.device} />
        </div>
        <div className={styles.filmWrapper}>
          <picture className={styles.frame}>
            <Image alt="OCI" src={film} className={styles.img} />
          </picture>
        </div>
      </div>
    </section>
  );
}
