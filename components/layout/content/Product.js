import styles from "./Product.module.css";
import Image from "next/image";
import Heading from "@/components/layout/content/Heading";
import Kicker from "@/components/layout/content/Kicker";
import Paragraph from "@/components/layout/content/Paragraph";

export default function Product({ level, kicker, title, copy, image, alt }) {
  switch (level) {
    case 1:
      return (
        <div className={styles.wrapperOne}>
          <div className={styles.container}>
            <div className={styles.copyContainer}>
              <Kicker level={3}>{kicker}</Kicker>
              <Heading level={3}>{title}</Heading>
              <Paragraph>{copy}</Paragraph>
              <div className={styles.action}></div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image alt={alt} src={image} className={styles.image} />
                <div className={styles.overlay}></div>
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className={styles.wrapperTwo}>
          <div className={styles.container}>
            <div className={styles.reverse}>
              <Kicker level={3}>{kicker}</Kicker>
              <Heading level={3}>{title}</Heading>
              <Paragraph>{copy}</Paragraph>
              <div className={styles.action}></div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image alt={alt} src={image} className={styles.image} />
                <div className={styles.overlay}></div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      throw Error("Unknown level: " + level);
  }
}
