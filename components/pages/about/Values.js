import Card from "./Card";
import styles from "./Values.module.css";
import { environment, innovation, quality } from "./Copy";
import valueQuality from "@/public/images/about/value-quality.jpg";
import valueEnvironment from "@/public/images/about/value-environment.jpg";
import valueInnovation from "@/public/images/about/value-innovatie.jpg";
import Title from "../../shared/Title";
import Description from "../../shared/Description";

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.copyContainer}>
        <Title level={2} eyebrow="Values" title="Principles in practice" />
        <div className={styles.descWrapper}>
          <Description copy="Our values guide us in every decision. Discover how we prioritize quality, every step of the way." />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.valueWrapper}>
          <Card
            title="Environment"
            desc="We consider our impact on people and the planet in everything we do."
            headline="Creating positive impact"
            copy={environment}
            image={valueEnvironment}
            alt="OCI - Creating positive impact on environment"
          />
          <Card
            title="Innovation"
            desc="Our commitment to innovation powers our journey towards excellence."
            headline="Unlocking new possibilities"
            copy={innovation}
            image={valueInnovation}
            alt="OCI - Developing innovative and sustainable products"
          />
          <Card
            title="Quality"
            desc="From sourcing to recycling, we apply the highest standards."
            headline="The highest standards"
            copy={quality}
            image={valueQuality}
            alt="OCI - Products and solutions of the highest quality"
          />
        </div>
      </div>
    </section>
  );
}
