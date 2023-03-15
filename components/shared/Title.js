import styles from "./Title.module.css";

export default function Title({ eyebrow, title }) {
  return (
    <div className={styles.container}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
