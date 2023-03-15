import styles from "./Description.module.css";

export default function Description({ copy }) {
  return <p className={styles.copy}>{copy}</p>;
}
