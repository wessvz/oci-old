import NextLink from "./NextLink";
import styles from "./MenuItem.module.css";

export default function MenuItem({ link, title }) {
  return (
    <li>
      <NextLink href={link}>
        <div className={styles.wrapper}>
          <span className={styles.title}>{title}</span>
        </div>
      </NextLink>
    </li>
  );
}
