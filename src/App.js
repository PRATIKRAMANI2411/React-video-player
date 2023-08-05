import React, { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";
import "./styles.css";

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};

const VideoName = Object.keys(videos);

export default function App() {
  const [videoSrc, SetvideoSrc] = useState(videos.snail);
  const onSelectValue = (video) => {
    const videoSc = videos[video];
    SetvideoSrc(videoSc);
  };

  return (
    <div className="App">
      <h1>Video player</h1>
      <Menu onSelectvideo={onSelectValue} videovalue={VideoName} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}
