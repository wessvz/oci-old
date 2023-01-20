import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.desktop}>
          <ul className={styles.grid}>
            <li className={styles.colomn}>
              <div className={styles.logo}>
                <Link href="/">Full Stacks</Link>
              </div>
            </li>

            <li>
              <div className={styles.title}>Services</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/marketing">Online marketing</Link>
                </li>
                <li>
                  <Link href="/development">Development</Link>
                </li>
                <li>
                  <Link href="/strategie">Strategie</Link>
                </li>
              </ul>
            </li>

            <li>
              <div className={styles.title}>Bedrijf</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/about">Over Full Stacks</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/contact">Vacatures</Link>
                </li>
              </ul>
            </li>

            <li>
              <div className={styles.title}>Resources</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/contact">Sitemap</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <section className={styles.section}>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Full Stacks. Alle rechten
            voorbehouden.
          </p>
        </section>
      </div>
    </footer>
  );
}
