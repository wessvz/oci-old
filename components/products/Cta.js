import styles from "./Cta.module.css";

export default function Section() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Do you have questions? Just ask.</h2>
      <p className={styles.copy}>
        We're here to help. Whenever and however you need it.
      </p>
      <button>Talk to an Expert</button>
    </section>
  );
}
