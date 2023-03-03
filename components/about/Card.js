import styles from "./Card.module.css";
import Image from "next/image";
import voorbeeld from "../../public/images/voorbeeld-value.jpg";
import Modal from "./ModalTwo";

export default function Card({ title, desc, copy, headline, className }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <picture className={styles.picture}>
          <Image alt="Voorbeeld" src={voorbeeld} className={styles.img} />
        </picture>
      </div>
      <div className={styles.copyWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.copy}>{desc}</p>
        <Modal headline={headline} copy={copy} className={className} />
      </div>
    </div>
  );
}
