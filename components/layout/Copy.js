import styles from "./Copy.module.css";

export default function Copy({ style, children, width }) {
  switch (style) {
    case 1:
      return <p className={styles.description}>{children}</p>;
    case 2:
      return (
        <p className={styles.intro + (width ? " " + styles[width] : "")}>
          {children}
        </p>
      );
    case 3:
      return <p className={styles.desc}>{children}</p>;
    default:
      throw Error("Unknown level: " + style);
  }
}
