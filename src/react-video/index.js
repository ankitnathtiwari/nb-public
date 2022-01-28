import React, { useState, useEffect, useRef, useContext } from "react";
import ReactPlayer from "react-player";
import { videoUrl, mainUrl, thumbnailUrl } from "../base-url";
import { SocialShareButton } from "../social-share-button";
import moment from "moment";
import "./index.css";
import { Button } from "../shared/button";
import axios from "axios";
const width = "100vw";
import { globalContext } from "../app";
import { baseUrl } from "../base-url";
import { FollowButton } from "../shared/button/followButton";

export const ReactVideo = ({ item, followingUser, setFollowingUser }) => {
  const { user, setUser, openModal, setOpenModal } = useContext(globalContext);
  const [volume, setVolume] = useState(0.6);
  const [seekValue, setSeekValue] = useState(0);
  const [playValue, setPlayValue] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [playDuration, setPlayDuration] = useState(0);
  const player = useRef();
  const videoItemRef = useRef();

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
        url: `${baseUrl}/public/follow?followed=${item.user}`,
        withCredentials: true,
      });
      if (followResponse.data.status) {
        setFollowingUser({ status: true, user: item.user });
      }
    } else {
      const followResponse = await axios({
        method: "post",
        url: `${baseUrl}/public/unfollow?followed=${item.user}`,
        withCredentials: true,
      });
      if (followResponse.data.status) {
        //update followStatus of list
        setFollowingUser({ status: false, user: item.user });
      }
    }
  };

  return (
    <div className="short-video-with-desc" key={item._id} ref={videoItemRef}>
      <div onClick={() => setPlayValue(!playValue)}>
        <ReactPlayer
          ref={player}
          url={`${item.url.video}/${item.video}`}
          width={width}
          controls={false}
          playing={playValue}
          volume={volume}
          light={`${item.url.thumbnail}/${item.thumbNail}`}
          className="react-player"
          onProgress={(e) => {
            setSeekValue(Number(e.played) * 100);
            setPlayTime(e.playedSeconds);
          }}
          onDuration={(e) => {
            setPlayDuration(e);
            console.log(e, "duration react player");
          }}
          onClickPreview={(e) => {
            console.log({ e }, "clikc on priview");
          }}
        />

        <div className="react-player-play-button">
          {!playValue && seekValue > 0 ? (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="64.000000pt"
              height="64.000000pt"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#fefefe"
                stroke="none"
              >
                <path
                  d="M126 558 c-23 -33 -23 -443 0 -476 8 -12 21 -22 27 -22 7 1 91 51
           187 113 171 110 175 114 175 147 0 33 -4 37 -175 147 -96 62 -180 112 -187
           113 -6 0 -19 -10 -27 -22z m195 -110 c176 -112 187 -121 170 -141 -15 -19
           -326 -217 -340 -217 -8 0 -11 65 -11 230 0 165 3 230 11 230 7 0 83 -46 170
           -102z"
                />
              </g>
            </svg>
          ) : null}
        </div>
        <div className="react-player-seek">
          {!playValue && seekValue > 0 ? (
            <input
              type="range"
              min="1"
              max="100"
              value={seekValue}
              onChange={handleSeek}
              className="react-player-seek-slider"
            />
          ) : null}
          {/* <p>{moment().startOf("day").seconds(playTime).format("mm:ss")}</p>
          <p>{moment().startOf("day").seconds(playDuration).format("mm:ss")}</p> */}
        </div>
      </div>
      <h4 className="short-video-with-desc-video-title">{item.title}</h4>
      <div className="video-post-social-share-button">
        <div className="video-post-social-share-button-time">
          {moment(item.pub_date).startOf("hours").fromNow()}
          <p>{`by ${item.authorName}`}</p>
        </div>

        <div className="video-post-follow-button">
          <FollowButton onClick={() => handleFollow(item)}>
            {item.followStatus ? "Following" : "Follow"}
          </FollowButton>
        </div>

        <SocialShareButton post={item} shareUrl={`${mainUrl}/videos`} />
      </div>
    </div>
  );
};
