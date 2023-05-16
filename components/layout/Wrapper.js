import styles from "./Wrapper.module.css";

export default function Wrapper({ style, children, space }) {
  switch (style) {
    case 1:
      return <div className={styles.default}>{children}</div>;
    case 2:
      return (
        <div className={styles.center + (space ? " " + styles[space] : "")}>
          {children}
        </div>
      );
    case 3:
      return <div className={styles.accordion}>{children}</div>;
    case 4:
      return <div className={styles.resources}>{children}</div>;
    default:
      throw Error("Unknown level: " + style);
  }
}
