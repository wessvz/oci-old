import { Check } from "@/public/icons/Outline";
import styles from "./Item.module.css";

export default function Item({ title, description }) {
  return (
    <li className={styles.item}>
      <h4 className={styles.title}>
        <span className={styles.icon}>
          <Check />
        </span>
        {title}
      </h4>
      <p className={styles.text}>{description}</p>
    </li>
  );
}
