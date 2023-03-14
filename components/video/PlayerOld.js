import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Player.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import machine from "../../public/images/voorbeeld-5.jpg";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showThumbnail, setShowThumbnail] = useState(true);

  const handlePlayerReady = () => {
    setShowThumbnail(false);
  };

  return (
    <div className={styles.videoContainer}>
      {showThumbnail && (
        <Image alt="Voorbeeld" src={machine} className={styles.image} />
      )}
      <ReactPlayer
        url={isMobile ? "./video/mobile.mp4" : "./video/desktop.mp4"}
        loop={true}
        playing={true}
        muted={true}
        playsinline="true"
        width="100%"
        height="100%"
        className={styles.player}
        onReady={handlePlayerReady}
      />
    </div>
  );
}
