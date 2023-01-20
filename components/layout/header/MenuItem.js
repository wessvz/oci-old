import NextLink from "./NextLink";
import styles from "./MenuItem.module.css";

export default function MenuItem({ link, title, description, icon }) {
  return (
    <li>
      <NextLink href={link}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </NextLink>
    </li>
  );
}
