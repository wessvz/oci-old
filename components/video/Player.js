import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Player.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import machine from "../../public/images/voorbeeld-5.jpg";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <div className={styles.videoContainer}>
      {loading && (
        <Image
          alt="Voorbeeld"
          src={machine}
          className={styles.image}
          style={{
            opacity: loading ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          onLoad={handleLoaded}
        />
      )}
      <ReactPlayer
        url={isMobile ? "./video/mobile.mp4" : "./video/desktop.mp4"}
        loop={true}
        playing={true}
        muted={true}
        onReady={handleLoaded}
        playsinline="true"
        width="100%"
        height="100%"
        className={styles.player}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
