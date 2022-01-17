import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useRouteMatch, useLocation } from "react-router-dom";
import { videoUrl } from "../base-url";
import { ReactVideo } from "../react-video";
import { Button } from "../shared/button";
import { Loading } from "../shared/loading";
import { SocialShareButton } from "../social-share-button";
import "./index.css";
import { useFetch } from "./useFetch";
const width = "90vw";

const ShortVideos = (props) => {
  let searchParams = new URLSearchParams(useLocation().search);
  const topic = searchParams.get("top");
  const id = searchParams.get("id");
  const [page, setPage] = useState(1);
  const videoListRef = useRef();

  const [videoList, loading, err] = useFetch(
    topic ? topic : "allpost",
    page,
    setPage,
    videoListRef,
    id ? id : null
  );

  if (loading) {
    return (
      <div className="short-videos">
        <Loading />
      </div>
    );
  }
  if (videoList.length === 0) {
    return <div className="short-videos">No Videos</div>;
  }

  return (
    <div className="short-videos">
      {videoList.map((item) => {
        return (
          <div key={item._id} ref={videoListRef}>
            <ReactVideo item={item} />
          </div>
        );
      })}
      <Button onClick={() => setPage(page + 1)}> Load More </Button>
    </div>
  );
};

export default React.memo(ShortVideos);
