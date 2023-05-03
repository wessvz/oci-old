import styles from "./Column.module.css";

export default function Column({ style, children, order }) {
  switch (style) {
    case "copy":
      return (
        <div className={`${styles.copy} ${styles[order]}`}>{children}</div>
      );
    case "image":
      return <div className={styles.image}>{children}</div>;
    case "card":
      return (
        <div className={styles.card}>
          <div className={styles.wrapper}>{children}</div>
        </div>
      );
    default:
      throw Error("Unknown level: " + style);
  }
}
