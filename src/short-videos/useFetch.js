import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../base-url";
import regeneratorRuntime from "regenerator-runtime";

const fetchData = async (top, page) => {
  const url = `${baseUrl}/video/allvideo?top=${top}&&page=${page}`;
  try {
    const res = await axios.get(url);
    return { status: true, data: res.data };
  } catch (err) {
    return { status: false, data: err.message };
  }
};

export const useFetch = (propTopic, page, setPage, videoListRef) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [topic, setTopic] = useState("allpost");

  const getVideoList = async (propTopic, page) => {
    const result = await fetchData(propTopic, page);

    if (result.status) {
      setVideoList(result.data);
      setLoading(false);
    } else {
      setErr(true);
      setLoading(false);
    }
  };

  const getVideoListOnPageChange = async (propTopic, page) => {
    const result = await fetchData(propTopic, page);
    if (result.status) {
      setVideoList([...videoList, ...result.data]);
      setLoading(false);
    } else {
      setErr(true);
      setLoading(false);
    }
  };

  if (propTopic !== topic) {
    setPage(1);
    setTopic(propTopic);
  }

  useEffect(() => {
    getVideoList(propTopic, page);
    return () => {};
  }, [topic]);

  useEffect(() => {
    if (page > 1) {
      getVideoListOnPageChange(propTopic, page);
    }
    return () => {};
  }, [page]);

  return [videoList, loading, err];
};

// let searchParams = new URLSearchParams(query);
// const topic = searchParams.get("top");

// const url = `${baseUrl}${query}&page=${state.page}`;
