import styles from "./Mobile.module.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import MenuItem from "./MenuItem";

export default function Mobile() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            className={styles.NavigationTrigger}
            aria-label="Menu"
          >
            <div className={styles.hamburger}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.content}>
            <div className={styles.MobileHeader}></div>
            <nav>
              <ul className={styles.list}>
                <MenuItem
                  link="/products"
                  title="Products"
                  description="Bereik meer en kom verder"
                />
                <MenuItem
                  link="/products"
                  title="Sustainability"
                  description="Applicaties voor het moderne web"
                />
                <MenuItem
                  link="/about"
                  title="About us"
                  description="Begin met het waarom"
                />
                <MenuItem
                  link="/contact"
                  title="Contact"
                  description="Begin met het waarom"
                />
              </ul>
            </nav>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
}
