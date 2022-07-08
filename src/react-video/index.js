import React, { useState, useEffect, useRef, useContext } from "react";
import ReactPlayer from "react-player";
import { appConfig } from "../app-config";
import { SocialShareButton } from "../social-share-button";
import moment from "moment";
import "./index.css";
import { Button } from "../shared/button";
import axios from "axios";
const width = "100vw";
import { globalContext } from "../app";
import { FollowButton } from "../shared/button/followButton";
import { PlayerControl } from "./playerControls";

export const ReactVideo = ({ item, handleUserFollow }) => {
  const { user, setUser, openModal, setOpenModal } = useContext(globalContext);
  const [volume, setVolume] = useState(0.6);
  const [seekValue, setSeekValue] = useState(0);
  const [playValue, setPlayValue] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [playDuration, setPlayDuration] = useState(0);
  const player = useRef();
  const videoItemRef = useRef();
  const [showControl, setShowControl] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(true);
  const handleSeek = (e) => {
    setSeekValue(e.target.value);
    player.current.seekTo(Number(e.target.value) / 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      };
      let callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setPlayValue(false);
          }
        });
      };
      let observer = new IntersectionObserver(callback, options);

      let target = videoItemRef.current;
      if (target) {
        observer.observe(target);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleFollow = async (item) => {
    if (!user.auth) {
      return setOpenModal(true);
    }
    if (!item.followStatus) {
      const followResponse = await axios({
        method: "post",
        url: `${appConfig.url.api}/public/follow?followed=${item.user}`,
        withCredentials: true,
      });
      if (followResponse.data.status) {
        handleUserFollow({ status: true, user: item.user });
      }
    } else {
      const followResponse = await axios({
        method: "post",
        url: `${appConfig.url.api}/public/unfollow?followed=${item.user}`,
        withCredentials: true,
      });
      if (followResponse.data.status) {
        //update followStatus of list
        handleUserFollow({ status: false, user: item.user });
      }
    }
  };

  const handlePreviewClick = (item) => {
    setThumbnailPreview(false);
    setPlayValue(true);

    const viewCountResponse = async () => {
      let viewCount = await axios({
        method: "post",
        url: `${appConfig.url.api}/public/view_count?videoId=${item._id}`,
        withCredentials: true,
      });
      console.log(viewCount);
    };
    viewCountResponse();
  };

  return (
    <div className="short-video-with-desc" key={item._id} ref={videoItemRef}>
      <div
        onClick={() => {
          if (playValue) {
            setShowControl(!showControl);
          }
        }}
      >
        <ReactPlayer
          ref={player}
          url={`${appConfig.url.video}/${item.video}`}
          width={width}
          controls={false}
          playing={playValue}
          volume={volume}
          light={`${appConfig.url.thumbnail}/${item.thumbNail}`}
          className="react-player"
          onProgress={(e) => {
            setSeekValue(Number(e.played) * 100);
            setPlayTime(e.playedSeconds);
          }}
          onDuration={(e) => {
            setPlayDuration(e);
          }}
          onClickPreview={(e) => {
            handlePreviewClick(item);
          }}
        />

        <PlayerControl
          showControl={showControl}
          setShowControl={setShowControl}
          playValue={playValue}
          setPlayValue={setPlayValue}
          seekValue={seekValue}
          handleSeek={handleSeek}
          playTime={playTime}
          playDuration={playDuration}
          thumbnailPreview={thumbnailPreview}
        />
      </div>
      <h4 className="short-video-with-desc-video-title">{item.title}</h4>
      <p className="short-video-with-desc-video-views">
        {!item.view_count || Number(item.view_count) < 1
          ? "no"
          : item.view_count}{" "}
        views
      </p>
      <div className="video-post-social-share-button">
        <div className="video-post-social-share-button-time">
          <div>{moment(item.pub_date).startOf("hours").fromNow()}</div>
          <p>
            {`by ${item.authorName}`}{" "}
            {item.followers_count
              ? ` / ${item.followers_count} Followers`
              : null}
          </p>
        </div>

        <div className="video-post-follow-button">
          <FollowButton onClick={() => handleFollow(item)}>
            {item.followStatus ? "Following" : "Follow"}
          </FollowButton>
        </div>

        <SocialShareButton
          post={item}
          shareUrl={`${appConfig.url.share}/videos`}
        />
      </div>
    </div>
  );
};
