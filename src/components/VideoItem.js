import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="row p-3 m-3" onClick={() => onVideoSelect(video)}>
      <div className="col-6">
        <img
          className="card-img"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="col-6 pl-3 d-flex align-items-center bolder">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
