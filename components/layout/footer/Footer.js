import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-oci-white.svg";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.desktop}>
          <ul className={styles.grid}>
            <li className={styles.colomn}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image alt="OCI" src={logo} className={styles.svg} />
                </Link>
              </div>
            </li>

            <li>
              <div className={styles.title}>Company</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </li>

            <li>
              <div className={styles.title}>Resources</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/algemene-voorwaarden">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Statement</Link>
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
            Copyright © {new Date().getFullYear()} OCI B.V. Alle rechten
            voorbehouden.
          </p>
        </section>
      </div>
    </footer>
  );
}
