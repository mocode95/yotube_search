import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useVideos("kitties");
  //setSelectedVideos(response.data.items[0]);

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="container">
      <SearchBar onFormSubmit={search} />
      <div className="row">
        <div className="col-md-7">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </div>
  );
};

export default App;
