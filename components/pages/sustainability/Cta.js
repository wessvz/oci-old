import styles from "./Cta.module.css";
import Title from "../../shared/Title";
import Description from "../../shared/Description";
import LargeButton from "../../button/LargeButton";

export default function Cta() {
  return (
    <section className={styles.container}>
      <Title eyebrow="Get advise" title="Do you have questions?" />
      <div className={styles.desc}>
        <Description copy="We're here to help. Whenever and however you need it. Get in touch with our team now." />
      </div>
      <div className={styles.button}>
        <LargeButton buttonText="Talk to an expert" link="/contact" />
      </div>
    </section>
  );
}
