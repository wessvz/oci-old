import styles from "./Proposition.module.css";
import Image from "next/image";
import video from "@/public/images/video-photo.webp";
import { Play } from "@/public/icons/General";
import Item from "../content/Item";
import Heading from "../layout/content/Heading";

export default function Proposition() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <div className={styles.content}>
            <h2 className={styles.title}>How we make a difference</h2>
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
              <Image alt="Voorbeeld" src={video} className={styles.image} />
              <div className={styles.play}>
                <Play />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
