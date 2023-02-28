import styles from "./Item.module.css";

export default function Item({ icon, href, contact }) {
  return (
    <div>
      <a href={href} className={styles.contact}>
        <span className={styles.icon}>{icon}</span>
        {contact}
      </a>
    </div>
  );
}
