import styles from "./Section.module.css";

export default function Section({ layout, children }) {
  switch (layout) {
    case 1:
      return <section className={styles.default}>{children}</section>;
    case 2:
      return <section className={styles.custom}>{children}</section>;
    default:
      throw Error("Unknown level: " + level);
  }
}
