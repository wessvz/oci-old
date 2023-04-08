import styles from "./Box.module.css";
import Dialog from "./ModalBrand";

export default function Box({ headline }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.copyWrapper}>
        <h3 className={styles.title}>{headline}</h3>
        <Dialog
          title="Valves"
          text="Make changes to your profile here. Click save when you're done.Make changes to your profile here."
        />
      </div>
    </div>
  );
}
