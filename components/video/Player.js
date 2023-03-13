import dynamic from "next/dynamic";
import styles from "./Player.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.videoWrapper}>
      <ReactPlayer
        url={isMobile ? "./video/mobile.mp4" : "./video/desktop.mp4"}
        loop={true}
        playing={true}
        muted={true}
        playsinline="true"
        width="100%"
        height="100%"
        className={styles.player}
      />
    </div>
  );
}
