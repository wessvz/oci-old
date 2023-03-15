import Description from "../shared/Description";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Do anything with ease</h2>
      <div className={styles.copyWrapper}>
        <Description
          copy="OCI products are designed to reduce our impact on the planet while
      maximizing performance and strength."
        />
      </div>
    </section>
  );
}
