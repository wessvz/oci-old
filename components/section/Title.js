import React from "react";
import Kicker from "../layout/content/Kicker";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <Kicker level={3}>Solutions</Kicker>
      <h2 className={styles.title}>Discover the world of OCI</h2>
      <p className={styles.paragraph}>
        Smart solutions for connecting energy and water networks to homes,
        offices and industrial sites.
      </p>
    </div>
  );
}
