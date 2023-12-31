import styles from "./Proposition.module.css";
import Item from "./Item";
import Section from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import Company from "@/components/video/Company";
import overlay from "@/public/images/home/overlay.jpg";

export default function Proposition() {
  return (
    <Section style={3}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <Title style={3} size="default" color="light">
            Your trusted partner during the energy transition
          </Title>
          <ul className={styles.itemWrapper}>
            <Item
              title="Tailored solutions"
              description="Each project is unique. That's why we offer customized solutions tailored to the specific needs of our customers."
            />
            <Item
              title="Extensive knowledge and expertise"
              description="We have the knowledge, experience and drive to make any connection from the main grid a success."
            />
            <Item
              title="Environmentally and socially responsible"
              description="We are embracing our role in shaping a better future, through conscious decisions and actions."
            />
          </ul>
        </div>
        <div className={styles.video}>
          <div className={styles.pictureWrapper}>
            <Company
              image={overlay}
              player="home"
              style="radius"
              width={640}
              height={408}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
