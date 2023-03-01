import Card from "./Card";
import Facts from "./Facts";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copyWrapper}>
          <h2 className={styles.title}>This is OCI</h2>
        </div>
        <div className={styles.test}>
          <div>
            <p className={styles.desc}>
              Pick up an incoming call from your iPhone, kick back with your
              favorite shows on Apple TV, listen to music on your Mac — HomePod
              mini works effortlessly with all your Apple devices and
              experiences to take your sound to the next level. You can even
              create a stereo pair — two HomePod mini speakers paired in the
              same room create left and right channels for fully immersive audio
            </p>
          </div>
          <div className={styles.factWrapper}>
            <Facts />
          </div>
        </div>
      </div>
    </section>
  );
}
