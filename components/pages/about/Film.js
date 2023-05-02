import styles from "./Film.module.css";
import Image from "next/image";
import device from "@/public/images/device.png";
import film from "@/public/images/about/film-start.jpg";
import Title from "../../shared/Title";
import Company from "@/components/video/Company";

export default function Film() {
  return (
    <section className={styles.section}>
      <div className={styles.copyContainer}>
        <Title eyebrow="Virtual tour" title="Step inside OCI" />
      </div>

      <div className={styles.filmContainer}>
        <div className={styles.deviceWrapper}>
          <Image alt="OCI" src={device} className={styles.device} />
        </div>
        <div className={styles.filmWrapper}>
          <picture className={styles.frame}>
            <Company
              image={film}
              player="about"
              style="default"
              width={2000}
              height={616}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
