import React, { useState, useEffect } from "react";
import { Post } from "../post";
import axios from "axios";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { appConfig } from "../app-config";
import "./index.css";

export const PostList = () => {
  let location = useLocation();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${appConfig.url.api}?top=${
          location.pathname.split("/")[1]
        }&page=${page}`
      )
      .then((res) => {
        setPosts([...posts, ...res.data]);
        setErr(false);
        setLoading(false);
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
      });
  }, [location.pathname, page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h2>Some Err Occured</h2>;
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post-list">
            <Post post={post} />
          </div>
        );
      })}
      <button onClick={handlePage}>Load More</button>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       {posts.map((post) => (
  //         <Post post={post} key={post.id} />
  //       ))}
  //     </div>
  //     <div>
  //       <button onClick={handlePage}>Load More</button>
  //     </div>
  //   </div>
  // );
};
