import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../base-url";

const getDataOnPageChange = (url, topic, dispatch) => {
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: "PAGE_CHANGE", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "ERR" });
    });
};

export const useFetch = (state, dispatch, query) => {
  if (query.length === 0) {
    query = "?top=allpost";
  }
  let searchParams = new URLSearchParams(query);
  const topic = searchParams.get("top");

  const url = `${baseUrl}/post/allpost/${query}&page=${state.page}`;

  useEffect(() => {
    if (topic !== state.topic) {
      return dispatch({ type: "TOPIC_CHANGE", payload: topic });
    }
    getDataOnPageChange(url, topic, dispatch);

    return () => {};
  }, [state.page, topic, state.topic]);
};
