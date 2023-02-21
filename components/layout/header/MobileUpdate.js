import styles from "./MobileUpdate.module.css";
import { useState } from "react";
import navLinks from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-oci-white.svg";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleNav = () => {
    setIsOpen((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div>
      <button
        type="button"
        className={styles.menuButton}
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <div className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </button>
      <div
        className={`${styles.navMenu} ${
          isOpen ? styles.navMenuOpen : styles.navMenuClosed
        }`}
      >
        <div className={styles.header}>
          <Link href="/">
            <Image
              alt="OCI"
              src={logo}
              className={styles.svg}
              onClick={onToggleNav}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <div key={link.title} className={styles.wrapper}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className={styles.footer}>
          <Link
            href="/contact"
            type="button"
            className={styles.contact}
            aria-label="Talk with sales"
            onClick={onToggleNav}
          >
            Contact opnemen met sales
          </Link>
        </div>
      </div>
    </div>
  );
}
