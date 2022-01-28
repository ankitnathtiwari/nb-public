import React, { useState, useEffect, useRef, useContext } from "react";
import ReactPlayer from "react-player";
import { useRouteMatch, useLocation } from "react-router-dom";
import { baseUrl, videoUrl } from "../base-url";
import { LoginModal } from "../login-modal";
import { ReactVideo } from "../react-video";
import { Button } from "../shared/button";
import { Loading } from "../shared/loading";
import { PopUpModal } from "../shared/pop-up-modal";
import { SocialShareButton } from "../social-share-button";
import "./index.css";
import { useFetch } from "./useFetch";
const width = "90vw";
import { globalContext } from "../app";
import axios from "axios";

const ShortVideos = (props) => {
  let searchParams = new URLSearchParams(useLocation().search);
  const topic = searchParams.get("top");
  const id = searchParams.get("id");
  const [page, setPage] = useState(1);
  const [followingUser, setFollowingUser] = useState({});
  const { user, setUser, openModal, setOpenModal } = useContext(globalContext);

  const [videoList, loading, err] = useFetch(
    topic ? topic : "allpost",
    page,
    setPage,
    id ? id : null,
    followingUser,
    user
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
    <>
      <div className={!openModal ? "short-videos" : "short-videos-filter"}>
        {videoList.map((item) => {
          return (
            <div key={item._id}>
              <ReactVideo
                item={item}
                followingUser={followingUser}
                setFollowingUser={setFollowingUser}
              />
            </div>
          );
        })}
        <div className="load-more-button">
          <Button onClick={() => setPage(page + 1)}> Load More </Button>
        </div>
      </div>
      <PopUpModal openModal={openModal} setOpenModal={setOpenModal}>
        <LoginModal setOpenModal={setOpenModal} />
      </PopUpModal>
    </>
  );
};

export default React.memo(ShortVideos);
