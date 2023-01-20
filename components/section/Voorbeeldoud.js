import styles from "./Panel.module.css";
import Image from "next/image";
import Heading from "@/components/layout/content/Heading";
import MediumButton from "@/components/button/MediumButton";
import Grid from "../layout/content/Grid";
import Section from "../layout/content/Section";
import Kicker from "../layout/content/Kicker";

export default function voorbeeldoud() {
  return (
    <Section style="default">
      <Grid>
        <div className={styles.grid}>
          <div className={styles.TextL}>
            <Kicker level={3}>Products</Kicker>
            <Heading level={3}>How we make a difference</Heading>
            <p>
              By delivering customized solutions, we focus on the specific
              situation and provide exactly what is needed for your production
              process. In everything we do we focus on our customers.
            </p>
          </div>
          <div className={styles.action}>
            <MediumButtonOut text="Learn more" link="/products" />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Products made by OCI"
              src={products}
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image alt="Code" src={magazijn} className={styles.image} />
            <div className={styles.overlay}></div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.TextR}>
            <Kicker level={3}>Company</Kicker>
            <Heading level={3}>Discover the world of OCI</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={styles.action}>
            <MediumButton text="Learn more" link="/about" />
          </div>
        </div>
      </Grid>
    </Section>
  );
}
