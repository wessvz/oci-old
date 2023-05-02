import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Player.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import machine from "../../public/images/voorbeeld-5.jpg";
import placeholder from "../../public/images/home/placeholder.jpg";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={styles.videoContainer}>
      <Image
        alt="Voorbeeld"
        src={placeholder}
        className={styles.image}
        priority
      />

      <ReactPlayer
        url={isMobile ? "./video/home-mobile.mp4" : "./video/home-desktop.mp4"}
        playing={videoLoaded}
        playsinline="true"
        muted={true}
        loop={true}
        width="100%"
        height="100%"
        onReady={handleLoaded}
        className={styles.player}
        style={{ opacity: videoLoaded ? 1 : 0 }}
      />
    </div>
  );
}
