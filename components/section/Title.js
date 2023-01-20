import React from "react";
import Kicker from "../layout/content/Kicker";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <Kicker level={3}>Specialty</Kicker>
      <h2 className={styles.title}>Customized assemblies</h2>
      <p className={styles.paragraph}>
        Smart solutions for connecting energy and water grids to domestic homes,
        office buildings and industrial sites.
      </p>
    </div>
  );
}
