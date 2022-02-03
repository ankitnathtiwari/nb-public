import React, { useState, useEffect, useRef, useContext } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { LoginModal } from "../login-modal";
import { ReactVideo } from "../react-video";
import { Button } from "../shared/button";
import { Loading } from "../shared/loading";
import { PopUpModal } from "../shared/pop-up-modal";
import "./index.css";
import { useFetch } from "./useFetch";
const width = "90vw";
import { globalContext } from "../app";
import { Helmet } from "react-helmet";
import { appConfig } from "../app-config";
const ShortVideos = (props) => {
  let searchParams = new URLSearchParams(useLocation().search);
  const topic = searchParams.get("top");
  const id = searchParams.get("id");
  const [page, setPage] = useState(1);
  const [followingUser, setFollowingUser] = useState({});
  const { user, setUser, openModal, setOpenModal, sidebar } =
    useContext(globalContext);

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
      <div
        className={
          openModal || sidebar ? "short-videos-filter" : "short-videos"
        }
      >
        {videoList.map((item) => {
          return (
            <div key={item._id}>
              {videoList.length === 1 ? (
                <Helmet>
                  <title>{post.title}</title>
                  <meta
                    property="og:url"
                    content={`${appConfig.url.share}/?top=singlepost&id=${item._id}`}
                  />
                  <meta property="og:type" content="image" />
                  <meta
                    property="og:title"
                    content="When Great Minds Don’t Think Alike"
                  />
                  <meta
                    property="og:description"
                    content="How much does culture influence creative thinking?"
                  />
                  <meta
                    property="og:image"
                    content={`${appConfig.url.thumbnail}/${item.thumbNail}`}
                  />
                </Helmet>
              ) : null}

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
