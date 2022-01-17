import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import moment from "moment";
import { imageUrl } from "../base-url/index";
import { Link } from "react-router-dom";
import { SocialShare } from "../social-share";
import { SocialShareButton } from "../social-share-button";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        src={`${imageUrl}/${
          post.image[0] === "/" ? post.image.substr(1) : post.image
        }`}
        alt="News Image"
      />

      <h2 className="post-title">
        <Link to={`/?top=singlepost&id=${post._id}`}>{post.title}</Link>
      </h2>

      <p className="post-para">{post.content}</p>
      <p className="post_date">
        {moment(post.pub_date).format(" h:m a, on Do MMM YYYY ")}
      </p>
      <div className="post-social-share-button">
        <SocialShareButton post={post} />
      </div>
    </div>
  );
};
