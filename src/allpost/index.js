import React, { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { initFun } from "./initfun";
import { useRouteMatch } from "react-router";
import { useFetch } from "./useFetch";
import "./index.css";
import { Post } from "../post/index";
import { Button } from "../shared/button";
import { useLocation } from "react-router-dom";

export const AllPost = () => {
  const path = useLocation().pathname.split("/")[1];
  const [state, dispatch] = useReducer(reducer, path, initFun);
  useFetch(state, dispatch, path);

  useEffect(() => {
    if (state.query !== path) {
      if (path.length !== 0) {
        dispatch({ type: "QUERY_CHANGE", payload: path });
      }
    }
    return () => {};
  }, [path]);

  console.log(state, "allpost state");
  if (state.posts.length === 0) {
    if (state.loading || state.initLoading) {
      return <h2>Loading..</h2>;
    } else {
      return <h3>No Post to Show</h3>;
    }
  } else {
    return (
      <div className='post-list'>
        {state.posts.map((post) => {
          return (
            //            <div  className='post-list'>
            <Post post={post} key={post._id} />
            //          </div>
          );
        })}

        <Button onClick={() => dispatch({ type: "LOAD_MORE" })}>
          Load More
        </Button>
      </div>
    );
  }
};
