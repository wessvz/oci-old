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
                <MenuItem link="/products" title="Products" />
                <MenuItem link="/products" title="Sustainability" />
                <MenuItem link="/about" title="About us" />
                <MenuItem link="/contact" title="Contact" />
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
