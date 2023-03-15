import styles from "./Panel.module.css";
import Image from "next/image";
import Heading from "@/components/layout/content/Heading";
import Kicker from "@/components/layout/content/Kicker";
import Paragraph from "@/components/layout/content/Paragraph";
import MediumButton from "@/components/button/MediumButton";
import ButtonLink from "@/components/button/ButtonLink";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const PanelAnimation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 100 },
};

export default function Panel({
  order,
  kicker,
  title,
  copy,
  image,
  alt,
  buttonText,
  link,
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      className={styles.panelContainer}
      ref={ref}
      variants={PanelAnimation}
      initial="hidden"
      animate={control}
    >
      <div className={`${styles.copyContainer} ${styles[order]}`}>
        <Kicker level={3}>{kicker}</Kicker>
        <Heading level={3}>{title}</Heading>
        <Paragraph>{copy}</Paragraph>
        <div className={styles.action}>
          <ButtonLink text={buttonText} link={link} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image alt={alt} src={image} className={styles.image} />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </motion.div>
  );
}
