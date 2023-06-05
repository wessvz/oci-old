import styles from "./Flex.module.css";

export default function Flex({ style, children }) {
  switch (style) {
    case 1:
      return <div className={styles.default}>{children}</div>;
    case 2:
      return <div className={styles.panel}>{children}</div>;
    case 3:
      return <div className={styles.card}>{children}</div>;
    case 4:
      return <div className={styles.sustainable}>{children}</div>;
    case 5:
      return <div className={styles.contact}>{children}</div>;
    default:
      throw Error("Unknown level: " + style);
  }
}
