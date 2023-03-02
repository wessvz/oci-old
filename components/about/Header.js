import styles from "./Header.module.css";
import Image from "next/image";
import oci from "../../public/images/oci-frame.svg";

export default function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copyWrapper}>
          <figure className={styles.figure}>
            <Image alt="OCI" src={oci} className={styles.svg} />
          </figure>
          <h2 className={styles.title}>
            Moving markets with meaningful innovations.
          </h2>
          <p className={styles.copy}>
            Pick up an incoming call from your iPhone, kick back with your
            favorite shows on Apple TV, listen to music. You can even create a
            stereo pair.paired in the same room create left and right channels
            for fully immersive audio
          </p>
        </div>
      </div>
    </section>
  );
}
