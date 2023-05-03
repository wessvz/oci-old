import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Player.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player({
  videoMobile,
  videoDesktop,
  imageDesktop,
  imageMobile,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoaded = () => {
    setVideoLoaded(true);
  };

  const imageUrl = isMobile ? imageMobile : imageDesktop;
  const videoUrl = isMobile ? videoMobile : videoDesktop;

  return (
    <div className={styles.videoContainer}>
      <Image alt="Voorbeeld" src={imageUrl} className={styles.image} priority />

      <ReactPlayer
        url={videoUrl}
        playing={true}
        muted={true}
        loop={true}
        playsinline="true"
        width="100%"
        height="100%"
        onReady={handleLoaded}
        className={styles.player}
        style={{ opacity: videoLoaded ? 1 : 0 }}
      />
    </div>
  );
}
