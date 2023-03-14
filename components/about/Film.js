import styles from "./Film.module.css";
import Image from "next/image";
import device from "../../public/images/device.png";
import film from "../../public/images/about/film-start.jpg";
import Title from "../shared/Title";
import Headline from "../shared/Headline";

export default function Film() {
  return (
    <section className={styles.section}>
      <div className={styles.copyContainer}>
        <Title
          level={2}
          eyebrow="Virtual tour"
          title="Step inside OCI"
          copy="Experience a digital walk through our company in Malden, which is located just a short distance from Nijmegen."
        />
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
