import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/public/images/logo-oci-white.svg";
import Link from "next/link";
import Mobile from "./Mobile";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import NextLink from "./NextLink";

export default function Navbar() {
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.first}>
            <div className={styles.brand}>
              <Link href="/">
                <Image alt="OCI" src={logo} className={styles.svg} />
              </Link>
            </div>
          </div>
          <div className={styles.second}>
            <nav>
              <NavigationMenu.List className={styles.NavigationMenuList}>
                <NavigationMenu.Item>
                  <NextLink
                    href="/products"
                    className={styles.NavigationMenuLink}
                  >
                    Products
                  </NextLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NextLink href="/about" className={styles.NavigationMenuLink}>
                    About us
                  </NextLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NextLink href="/about" className={styles.NavigationMenuLink}>
                    Sustainability
                  </NextLink>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NextLink
                    href="/contact"
                    className={styles.NavigationMenuLink}
                  >
                    Contact
                  </NextLink>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator
                  className={styles.NavigationMenuIndicator}
                >
                  <div className={styles.NavigationMenuIndicator} />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className={styles.ViewportPosition}>
                <NavigationMenu.Viewport
                  className={styles.NavigationMenuViewport}
                />
              </div>
            </nav>
          </div>
          <div className={styles.third}>
            <Mobile />
          </div>
        </header>
      </div>
    </NavigationMenu.Root>
  );
}
