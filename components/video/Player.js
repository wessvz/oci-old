import ReactPlayer from "react-player";

function Player() {
  return (
    <ReactPlayer
      url="./video/fossilfree-desktop.mp4"
      loop="true"
      playing="true"
      width="100%"
      height="auto"
    />
  );
}

export default Player;
