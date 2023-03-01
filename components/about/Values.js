import Card from "./Card";
import styles from "./Values.module.css";

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copyWrapper}>
          <h2 className={styles.title}>
            Our values <br /> lead the way.
          </h2>
        </div>
        <div className={styles.valueWrapper}>
          <Card
            title="Environment"
            desc="We consider our impact on people and the planet in everything we do."
          />
          <Card
            title="Innovation"
            desc="Our commitment to innovation powers our journey towards excellence."
          />
          <Card
            title="Quality"
            desc="From sourcing to recycling, we apply the highest standards."
          />
        </div>
      </div>
    </section>
  );
}
