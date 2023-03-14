import Card from "./Card";
import styles from "./Values.module.css";
import { environment, innovation, quality } from "./Copy";
import environmentValue from "@/public/images/about/enviroment-value.jpg";
import innovationValue from "@/public/images/about/innovation-value.jpg";
import valueQuality from "@/public/images/about/value-quality.jpg";
import valueEnvironment from "@/public/images/about/value-environment.jpg";
import valueInnovation from "@/public/images/about/value-innovation.jpg";

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
            image={valueEnvironment}
            className="green"
          />
          <Card
            title="Innovation"
            desc="Our commitment to innovation powers our journey towards excellence."
            headline="Creating positive impact with clean energy"
            copy={innovation}
            image={valueInnovation}
            className="blue"
          />
          <Card
            title="Quality"
            desc="From sourcing to recycling, we apply the highest standards."
            headline="Creating positive impact with clean energy"
            copy={quality}
            image={valueQuality}
            className="red"
          />
        </div>
      </div>
    </section>
  );
}
