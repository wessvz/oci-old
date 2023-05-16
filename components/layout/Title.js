import styles from "./Title.module.css";

export default function Title({ style, children, width, size, color }) {
  switch (style) {
    case 1:
      return (
        <h1 className={styles.main + (width ? " " + styles[width] : "")}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={styles.sub + (width ? " " + styles[width] : "")}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={
            styles.descriptive +
            (size ? " " + styles[size] : "") +
            (color ? " " + styles[color] : "")
          }
        >
          {children}
        </h3>
      );
    case 4:
      return <h2 className={styles.resources}>{children}</h2>;
    case 5:
      return <h3 className={styles.sub}>{children}</h3>;
    default:
      throw Error("Unknown level: " + style);
  }
}
