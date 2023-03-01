import styles from "./Card.module.css";
import Image from "next/image";
import voorbeeld from "../../public/images/voorbeeld-value.jpg";
import Dialog from "./Modal";

export default function Card({ title, desc }) {
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
        <Dialog
          title="Valves"
          text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
        />
      </div>
    </div>
  );
}
