import dynamic from "next/dynamic";
import styles from "./Player.module.css";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  return (
    <div className={styles.videoWrapper}>
      <ReactPlayer
        url="./video/fossilfree-desktop.mp4"
        loop={true}
        playing={true}
        muted={true}
        playsinline="true"
        width="100%"
        height="100%"
        className={styles.test}
      />
    </div>
  );
}
