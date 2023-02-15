import styles from "./Mobile.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import MenuItem from "./MenuItem";
import LargeButton from "@/components/button/LargeButton";
import logo from "@/public/images/logo-oci-white.svg";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            className={styles.NavigationTrigger}
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <div className={styles.hamburger}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.content}>
            <div className={styles.header}>
              <Link href="/" onSelect={toggleMenu}>
                <Image alt="OCI" src={logo} className={styles.svg} />
              </Link>
            </div>
            <nav>
              <ul className={styles.list}>
                <MenuItem
                  link="/about"
                  title="About us"
                  onSelect={toggleMenu}
                />
                <MenuItem
                  link="/products"
                  title="Products"
                  onSelect={toggleMenu}
                />
                <MenuItem
                  link="/contact"
                  title="Contact"
                  onSelect={toggleMenu}
                />
                <MenuItem
                  link="/products"
                  title="Sustainability"
                  onSelect={toggleMenu}
                />
              </ul>
            </nav>
            <div className={styles.footer}>
              <LargeButton
                link="/contact"
                buttonText="contact opnemen met sales"
              />
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}
