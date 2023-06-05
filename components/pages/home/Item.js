import Copy from "@/components/layout/Copy";
import { Check } from "@/public/icons/General";
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
      <Copy style={3}>{description}</Copy>
    </li>
  );
}
