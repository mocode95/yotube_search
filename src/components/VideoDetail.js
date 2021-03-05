import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="m-3 p-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoSrc}></iframe>
      </div>
      <h5 className="card-title">{video.snippet.title}</h5>
      <p className="card-text">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
