import styles from "./ProductOption.module.css";
import Image from "next/image";
import Heading from "@/components/layout/content/Heading";
import Kicker from "@/components/layout/content/Kicker";
import Paragraph from "@/components/layout/content/Paragraph";

export default function Panel({ order, kicker, title, copy, image, alt }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={`${styles.copyContainer} ${styles[order]}`}>
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
  );
}
