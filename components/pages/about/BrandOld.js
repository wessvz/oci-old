import styles from "./Brand.module.css";
import Box from "./Box";
import Facts from "./Facts";

export default function Brand() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <Box
              headline="Our mission is to simplify and streamline the work of our
            users"
            />
          </div>
          <div className={styles.second}>
            <h3 className={styles.title}>Company facts</h3>
            <Facts />
          </div>
          <div className={styles.third}>
            <Box headline="We aspire to contribute to a sustainable energy system" />
          </div>
        </div>
      </div>
    </section>
  );
}
