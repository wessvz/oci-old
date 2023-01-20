import styles from "./Hero.module.css";
import Heading from "../layout/content/Heading";
import Subtitle from "../layout/content/Kicker";
import LargeButton from "../button/LargeButton";
import WaveBackground from "./WaveBackground";

export default function Hero({ title, subtitle, buttonText, link }) {
  return (
    <section>
      <WaveBackground />
      <div className={styles.wrapper}>
        <Heading level={1}>{title}</Heading>
        <Subtitle level={1}>{subtitle}</Subtitle>
        <LargeButton link={link} buttonText={buttonText} />
      </div>
    </section>
  );
}
