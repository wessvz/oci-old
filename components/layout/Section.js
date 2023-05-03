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
    case 4:
      return (
        <section className={styles.default}>
          <div className={styles.resources}>
            <div className={styles.prop}>{children}</div>
          </div>
        </section>
      );
    case 5:
      return (
        <section className={styles.white}>
          <div className={styles.brand}>
            <div className={styles.panel}>{children}</div>
          </div>
        </section>
      );
    default:
      throw Error("Unknown level: " + style);
  }
}
