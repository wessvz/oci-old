import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/oci-white.svg";
import Paragraph from "@/components/typography/Paragraph";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles.flex}>
            <li className={styles.company}>
              <div className={styles.title}>Company</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </li>

            <li className={styles.resources}>
              <div className={styles.title}>Resources</div>
              <ul className={styles.list}>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </li>

            <li className={styles.brand}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image alt="OCI" src={logo} className={styles.svg} />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <section className={styles.section}>
          <Paragraph style="copyright">
            © {new Date().getFullYear()} OCI B.V.
          </Paragraph>
        </section>
      </div>
    </footer>
  );
}
