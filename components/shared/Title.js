import styles from "./Title.module.css";

export default function Title({ level, eyebrow, title, copy }) {
  switch (level) {
    case 1:
      return (
        <div className={styles.container}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
      );
    case 2:
      return (
        <div className={styles.container}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.copy}>{copy}</p>
        </div>
      );

    default:
      throw Error("Unknown level: " + level);
  }
}
