import styles from "./Section.module.css";

export default function Section() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Do anything with ease</h2>
      <p className={styles.copy}>
        OCI products are designed to reduce our impact on the planet while
        maximizing performance and strength.
      </p>
    </section>
  );
}
