import styles from "./Heading.module.css";

export default function Heading({ level, color, children }) {
  switch (level) {
    case 1:
      return <h1 className={styles.xl}>{children}</h1>;
    case 2:
      return <h2 className={`${styles.lg} ${styles[color]}`}>{children}</h2>;
    case 3:
      return <h3 className={styles.md}>{children}</h3>;
    case 4:
      return <h4 className={styles.sm}>{children}</h4>;
    case 5:
      return <h5 className={styles.es}>{children}</h5>;
    case 6:
      return <p className={styles.subtitle}>{children}</p>;
    default:
      throw Error("Unknown level: " + level);
  }
}
