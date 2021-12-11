import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import moment from "moment";
import { imageUrl } from "../base-url/index";
import { Link } from "react-router-dom";
import { SocialShare } from "../social-share";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import { useCloseModel } from "../shared/close-model";
import { Button } from "../shared/button";

export const Post = ({ post }) => {
  const [openSocialShare, setOpenSocialShare] = useState(false);
  const shareModel = useRef();

  useEffect(() => {
    const closeModel = (e) => {
      if (!shareModel.current.contains(e.target)) {
        setOpenSocialShare(false);
      }
    };
    if (openSocialShare) {
      document.addEventListener("click", closeModel);
    }
    return () => {
      document.removeEventListener("click", closeModel);
    };
  });

  return (
    <div className="post">
      <img
        src={`${imageUrl}/${post.image}`}
        alt="News Image"
        width="200"
        height="200"
      />

      <h2 className="post-title">
        <Link to={`/?top=singlepost&id=${post._id}`}>{post.title}</Link>
      </h2>

      <p className="post-para">{post.content}</p>
      <p className="post_date">
        {moment(post.pub_date).format(" h:m a, on Do MMM YYYY ")}
      </p>

      <div className="post-share" onClick={() => setOpenSocialShare(true)}>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z" />
        </svg>
      </div>

      <div ref={shareModel}>
        {openSocialShare ? <SocialShare post={post} /> : null}
      </div>
    </div>
  );
};
