// components/VideoCard.js
import React from "react";

const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <p className="text-paragraph">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;