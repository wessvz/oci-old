import styles from "./Proposition.module.css";
import Image from "next/image";
import { Play } from "@/public/icons/General";
import Item from "./Item";
import Section from "@/components/layout/Section";
import Title from "@/components/layout/Title";
import overlay from "@/public/images/home/overlay-test-3.jpg";

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
            <Image alt="Voorbeeld" src={overlay} className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.play}>
              <Play />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
