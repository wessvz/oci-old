import React from "react";
import Kicker from "../layout/content/Kicker";
import styles from "./Title.module.css";

export default function Title({ kicker, title, copy }) {
  return (
    <div className={styles.container}>
      <Kicker level={3}>{kicker}</Kicker>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{copy}</p>
    </div>
  );
}
