import React, { useState, useEffect } from "react";
import "./index.css";
import moment from "moment";
import { imageUrl } from "../base-url/index";
export const Post = ({ post }) => {
  const testImage = "http://localhost:8000/image/fakeimage.jpg";

  return (
    <div className='post'>
      <img
        src={`${imageUrl}/compressed-images${post.image}`}
        alt='News Image'
        width='200'
        height='200'
      />
      <h2>{post.title}</h2>
      <p className='post-para'>{post.content}</p>
      <p className='post_date'>
        {moment(post.pub_date).format(" h:m a, on Do MMM YYYY ")}
      </p>
    </div>
  );
};
