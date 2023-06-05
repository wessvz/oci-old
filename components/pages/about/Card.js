import styles from "./Card.module.css";
import Image from "next/image";
import Modal from "./ModalValues";

export default function Card({ title, desc, copy, headline, image, alt }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <picture className={styles.picture}>
          <Image alt={alt} src={image} className={styles.img} />
        </picture>
      </div>
      <div className={styles.copyWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.copy}>{desc}</p>
        <Modal headline={headline} copy={copy} />
      </div>
    </div>
  );
}
