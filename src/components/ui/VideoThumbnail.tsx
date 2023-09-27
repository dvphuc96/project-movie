import { useRef } from "react";

export const VideoThumbnail = ({ videoUrl }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div
      className="max-w-full flex flex-row items-center relative rounded-6 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        width="420"
        height="315"
        src={`${videoUrl}?autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
