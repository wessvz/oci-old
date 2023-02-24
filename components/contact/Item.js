import styles from "./Item.module.css";

export default function Item({ icon, href, contact }) {
  return (
    <a href={href} className={styles.contact}>
      <span className={styles.icon}>{icon}</span>
      {contact}
    </a>
  );
}
