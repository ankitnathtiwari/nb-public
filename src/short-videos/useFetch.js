import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../base-url";
import regeneratorRuntime from "regenerator-runtime";

const fetchData = async (top, page) => {
  const url = `http://localhost:8080/json_api/videos?top=${top}&&page=${page}`;
  try {
    const res = await axios.get(url);
    return { status: true, data: res.data };
  } catch (err) {
    return { statu: false, data: err.message };
  }
};

export const useFetch = (propTopic, page, setPage) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [topic, setTopic] = useState("all");

  useEffect(() => {
    const getVideoList = async (propTopic, page) => {
      const result = await fetchData(propTopic, page);

      if (result.status) {
        setVideoList(...videoList, result.data);
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
    getVideoList(topic, page);

    return () => {};
  }, [propTopic, page]);
  return [videoList, loading, err];
};

// let searchParams = new URLSearchParams(query);
// const topic = searchParams.get("top");

// const url = `${baseUrl}${query}&page=${state.page}`;
