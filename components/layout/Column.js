import styles from "./Column.module.css";

export default function Column({ style, children, order }) {
  switch (style) {
    case "copy":
      return (
        <div className={`${styles.copy} ${styles[order]}`}>{children}</div>
      );
    case "image":
      return <div className={styles.image}>{children}</div>;
    default:
      throw Error("Unknown level: " + style);
  }
}
