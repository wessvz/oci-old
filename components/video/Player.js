import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Player() {
  return (
    <ReactPlayer
      url="./video/fossilfree-desktop.mp4"
      loop={true}
      playing={true}
      muted={true}
    />
  );
}