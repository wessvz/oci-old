import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./VideoPlayer.module.css";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import oci from "../../public/images/about/oci-malden-achtergrond.jpg";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className={styles.videoContainer}>
      {loading && (
        <Image
          alt="Voorbeeld"
          src={oci}
          className={styles.image}
          style={{
            opacity: loading ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
          onLoad={handleLoaded}
        />
      )}
      <ReactPlayer
        url={isMobile ? "./video/mobile.mp4" : "./video/products.mp4"}
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
