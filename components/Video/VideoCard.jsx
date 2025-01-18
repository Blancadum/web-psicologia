// components/VideoCard.js
import React from "react";

const VideoCard = ({ videoUrl, title }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-4">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;