import styles from "./Section.module.css";

export default function Section({ style, children }) {
  switch (style) {
    case 1:
      return (
        <section className={styles.default}>
          <div className={styles.container}>
            <div className={styles.layout}>{children}</div>
          </div>
        </section>
      );
    case 2:
      return (
        <section className={styles.default}>
          <div className={styles.container}>
            <div className={styles.panel}>{children}</div>
          </div>
        </section>
      );
    case 3:
      return (
        <section className={styles.dark}>
          <div className={styles.container}>
            <div className={styles.prop}>{children}</div>
          </div>
        </section>
      );
    default:
      throw Error("Unknown level: " + style);
  }
}
