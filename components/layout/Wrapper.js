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
    default:
      throw Error("Unknown level: " + style);
  }
}
