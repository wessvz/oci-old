import styles from "./Eyebrow.module.css";

export default function Eyebrow({ style, children }) {
  switch (style) {
    case 1:
      return <span className={styles.style}>{children}</span>;
    case 2:
      return <h1 className={styles.style}>{children}</h1>;
    case 3:
      return <h2 className={styles.default}>{children}</h2>;
    default:
      throw Error("Unknown level: " + style);
  }
}
