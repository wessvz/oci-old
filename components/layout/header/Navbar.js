import styles from "./Navbar.module.css";
import Link from "next/link";
import Mobile from "./Mobile";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.first}>
            <Link href="/">
              <div className={styles.logo}>OCI BV</div>
            </Link>
          </div>
          <div className={styles.second}>
            <nav>
              <NavigationMenu.List className={styles.NavigationMenuList}>
                <NavigationMenu.Item>
                  <Link href="/products" className={styles.NavigationMenuLink}>
                    Products
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link href="/about" className={styles.NavigationMenuLink}>
                    About us
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link href="/about" className={styles.NavigationMenuLink}>
                    Sustainability
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link href="/contact" className={styles.NavigationMenuLink}>
                    Contact
                  </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator
                  className={styles.NavigationMenuIndicator}
                >
                  <div className={styles.Arrow} />
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
