import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useRouteMatch, useLocation } from "react-router-dom";

import "./index.css";
import { useFetch } from "./useFetch";
let height = "360px";
const width = "90vw";
const divStyle = {
  backgroundColor: "#fefefe",
};

const ShortVideos = (props) => {
  let searchParams = new URLSearchParams(useLocation().search);
  const topic = searchParams.get("top");
  const [page, setPage] = useState(1);
  const [videoList, loading, err] = useFetch(topic || "all", page, setPage);

  console.log("short video rendered");
  return (
    <div className="short-videos">
      {videoList.map((item) => {
        return (
          <div className="short-video-with-desc" key={item._id}>
            <ReactPlayer
              url={item.video}
              height={height}
              width={width}
              style={divStyle}
              controls={true}
              playing={true}
              controls={true}
              light={item.thumbNail}
              className="react-player"
            />
          </div>
        );
      })}

      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
};

export default React.memo(ShortVideos);
