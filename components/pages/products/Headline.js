import styles from "./Headline.module.css";
import Description from "../../shared/Description";

export default function Headline() {
  return (
    <section className={styles.container}>
      <h1 className={styles.eyebrow}>Products</h1>
      <h2 className={styles.title}>Upgrade your performance</h2>
      <div className={styles.descWrapper}>
        <Description copy="Discover our extensive range of ball valves, fittings, pipelines and a sophisticated range of plastic products and installation materials." />
      </div>
    </section>
  );
}
