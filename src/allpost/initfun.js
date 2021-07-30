import { baseUrl, testUrl } from "../base-url/index";

export const initFun = (url) => {
  return {
    query: url,
    page: 1,
    path: `${baseUrl}`,
    method: "GET",
    loading: false,
    initLoading: true,
    err: false,
    message: "",
    posts: [],
  };
};
