import styles from "./Figure.module.css";
import Image from "next/image";

export default function Figure({ style, children, src, alt, width, height }) {
  switch (style) {
    case 1:
      return (
        <div className={styles.wrapper}>
          <Image
            alt={alt}
            src={src}
            className={styles.image}
            width={width}
            height={height}
          />
          <div className={styles.overlay}></div>
        </div>
      );
    case 2:
      return (
        <div className={styles.wrapper}>
          {children}
          <div className={styles.overlay}></div>
        </div>
      );
    default:
      throw Error("Unknown level: " + style);
  }
}
