import styles from "./Proposition.module.css";
import Image from "next/image";
import { Play } from "@/public/icons/General";
import Item from "./Item";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import Title from "@/components/layout/Title";
import video from "@/public/images/home/overlay.jpg";
import test from "@/public/images/home/overlay-test.jpg";
import overlay from "@/public/images/home/overlay-test-3.jpg";

export default function Proposition() {
  return (
    <Section style={3}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <Title style={3} size="default" color="light">
            How we make a difference
          </Title>
          <ul className={styles.itemWrapper}>
            <Item
              title="Delivering customized solutions"
              description="In everything we do we focus on our customers. Their success is our success."
            />
            <Item
              title="Accelerating the sustainability shift"
              description="Supporting our clients’ transition to sustainability."
            />
            <Item
              title="Innovative and sustainable solutions"
              description="We are a trusted partner and create long-term value for our clients."
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
