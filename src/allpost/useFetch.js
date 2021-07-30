import { useEffect } from "react";
import axios from "axios";

const getData = (url, dispatch) => {
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: "fetchCompleted", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch, path) => {
  useEffect(() => {
    if (state.initLoading || state.loading) {
      getData(`${state.path}?page=${state.page}&top=${state.query}`, dispatch);
    }
    return () => {};
  }, [state.initLoading, state.loading]);
};
