import React from "react";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import "../../../../node_modules/video-react/dist/video-react.css";

const VideoPlayer = (props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing  width="100%"
    height="100%" />
    </div>
  );
};

export default VideoPlayer;
