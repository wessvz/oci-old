import styles from "./Headline.module.css";

export default function Headline() {
  return (
    <section className={styles.container}>
      <h1 className={styles.eyebrow}>Contact us</h1>
      <h2 className={styles.title}>Get the help you need</h2>
      <p className={styles.copy}>
        Need assistance? Please reach out to us using the contact information
        below.
      </p>
    </section>
  );
}
