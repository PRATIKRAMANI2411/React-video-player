const Video = ({ videoSrc }) => {
  return <video loop controls autostart="true" src={videoSrc} autoPlay muted />;
};

export default Video;
