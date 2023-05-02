import styles from "./Company.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Company({ image, style, player }) {
  return (
    <ReactPlayer
      url="./video/tourvideo.mp4"
      controls={true}
      playing={true}
      playsinline="true"
      width="100%"
      height="100%"
      className={styles[player]}
      style={{
        objectFit: "cover",
      }}
      playIcon={
        <button className={styles.play}>
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M170.559 114.755C174.674 117.041 174.674 122.959 170.559 125.245L98.9139 165.048C94.9147 167.27 90 164.378 90 159.803L90 80.1971C90 75.6222 94.9147 72.7304 98.9139 74.9521L170.559 114.755Z"
              fill="white"
            />
          </svg>
        </button>
      }
      light={
        <div>
          <div className={styles.overlay}></div>
          <Image
            src={image}
            alt="Placeholder Company Video of OCI"
            className={styles[style]}
          />
        </div>
      }
    />
  );
}
