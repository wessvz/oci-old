import styles from "./Section.module.css";

export default function Section({ style, children }) {
  return <section className={`${styles[style]}`}>{children}</section>;
}
