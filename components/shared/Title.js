import styles from "./Title.module.css";

export default function Title({ eyebrow, title }) {
  return (
    <>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
    </>
  );
}
