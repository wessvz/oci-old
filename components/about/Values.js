import Card from "./Card";
import styles from "./Values.module.css";
import { environment, innovation, quality } from "./Copy";

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
            headline="Creating positive impact with clean energy"
            copy={environment}
            className="green"
          />
          <Card
            title="Innovation"
            desc="Our commitment to innovation powers our journey towards excellence."
            headline="Creating positive impact with clean energy"
            copy={innovation}
            className="blue"
          />
          <Card
            title="Quality"
            desc="From sourcing to recycling, we apply the highest standards."
            headline="Creating positive impact with clean energy"
            copy={quality}
            className="red"
          />
        </div>
      </div>
    </section>
  );
}
