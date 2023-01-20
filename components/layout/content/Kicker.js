import styles from "./Kicker.module.css";

export default function Kicker({ level, children }) {
  switch (level) {
    case 1:
      return <p className={styles.lg}>{children}</p>;
    case 2:
      return <p className={styles.md}>{children}</p>;
    case 3:
      return <p className={styles.sm}>{children}</p>;
    default:
      throw Error("Unknown level: " + level);
  }
}
