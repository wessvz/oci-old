import styles from "./TextButton.module.css";
import Link from "next/link";

export default function TextButton({ children, link, type = "button", label }) {
  return (
    <Link href={link}>
      <button
        type={type}
        aria-label={label}
        className={`${styles.button} ${styles.buttonArrow}`}
      >
        {children}
        <svg
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowIcon}
        >
          <g className={styles.arrowHead}>
            <path
              d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </g>
          <g className={styles.arrowBody}>
            <path d="M3.5 4.5H0" stroke="currentColor" strokeWidth="2" />
          </g>
        </svg>
      </button>
    </Link>
  );
}
