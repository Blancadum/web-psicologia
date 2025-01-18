// components/VideoGrid.js
import React from "react";
import VideoCard from "@/components/Video/VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} videoUrl={video.url} title={video.title} />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
