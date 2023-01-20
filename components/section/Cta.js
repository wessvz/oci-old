import styles from "./Cta.module.css";
import LargeButton from "../button/LargeButton";

export default function Cta({ title, buttonText, link, width }) {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} ${styles[width]}`}>{title}</h2>
      <LargeButton buttonText={buttonText} link={link} />
    </section>
  );
}
