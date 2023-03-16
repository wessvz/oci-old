import styles from "./Section.module.css";

export default function Section({ children }) {
  return <section className={styles.main}>{children}</section>;
}
