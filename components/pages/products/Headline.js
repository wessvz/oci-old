import styles from "./Headline.module.css";
import Description from "../../shared/Description";

export default function Headline() {
  return (
    <section className={styles.container}>
      <h1 className={styles.eyebrow}>Products</h1>
      <h2 className={styles.title}>Experience the difference</h2>
      <div className={styles.descWrapper}>
        <Description
          copy="OCI is an company with the customer at the core of our business. We
          deliver innovative and sustainable solutions for connecting energy and
          water networks to homes, offices and industrial sites"
        />
      </div>
    </section>
  );
}
