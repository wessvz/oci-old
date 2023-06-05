import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/public/logo/oci-white.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Mobile from "./Mobile";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

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
                  <Link
                    href="/"
                    className={
                      currentRoute === "/" ? styles.active : styles.link
                    }
                  >
                    Home
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link
                    href="/products"
                    className={
                      currentRoute === "/products" ? styles.active : styles.link
                    }
                  >
                    Products
                  </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link
                    href="/sustainability"
                    className={
                      currentRoute === "/sustainability"
                        ? styles.active
                        : styles.link
                    }
                  >
                    Sustainability
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link
                    href="/about"
                    className={
                      currentRoute === "/about" ? styles.active : styles.link
                    }
                  >
                    About us
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link
                    href="/contact"
                    className={
                      currentRoute === "/contact" ? styles.active : styles.link
                    }
                  >
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
          <div className={styles.mobile}>
            <Mobile />
          </div>
        </header>
      </div>
    </NavigationMenu.Root>
  );
}
