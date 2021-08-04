import React, { useState, useEffect } from "react";
import "./index.css";
import moment from "moment";

export const Post = ({ post }) => {
  const testImage = "http://localhost:8000/image/fakeimage.jpg";

  return (
    <div className='post'>
      <img src={post.image} alt='Girl in a jacket' width='200' height='200' />
      <h2>{post.title}</h2>
      <p className='post-para'>{post.content}</p>
      <p className='post_date'>
        At {moment(post.pub_date).format(" h:mm:ss, on Mo MMM YYYY ")}
      </p>
    </div>
  );
};
