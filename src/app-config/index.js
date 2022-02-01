import { envConfig } from "../../env_config";
const env = envConfig;

const config = {
  mock: {
    url: {
      api: "http://localhost:8080/json_api",
      video: "http://localhost:8080",
      image: "http://localhost:8080",
      thumbnail: "http://localhost:8080",
      share: "http://localhost:8080",
    },
    oAuth: {
      googleId:
        "707182129646-gna1evuic74nuq10bdiuv83j4j0fco3t.apps.googleusercontent.com",
      facebookId: "",
    },
    analytics: {
      google: "UA-215888484-1",
    },
  },
  development: {
    url: {
      api: "http://localhost:8000/json_api",
      video: "https://d4nl0nj5cg2xr.cloudfront.net",
      image: "https://d4nl0nj5cg2xr.cloudfront.net",
      thumbnail: "https://d4nl0nj5cg2xr.cloudfront.net",
      share: "http://localhost:8080",
    },
    oAuth: {
      googleId:
        "707182129646-gna1evuic74nuq10bdiuv83j4j0fco3t.apps.googleusercontent.com",
      facebookId: "",
    },
    analytics: {
      google: "UA-215888484-1",
    },
  },
  staging: {
    url: {
      api: "http://staging.newsbird.live/json_api",
      video: "https://d4nl0nj5cg2xr.cloudfront.net",
      image: "https://d4nl0nj5cg2xr.cloudfront.net",
      thumbnail: "https://d4nl0nj5cg2xr.cloudfront.net",
      share: "http://localhost:8080",
    },
    oAuth: {
      googleId:
        "707182129646-je9tjuk017sjhejbum688i8lbcshje8o.apps.googleusercontent.com",
      facebookId: "",
    },
    analytics: {
      google: "UA-215888484-1",
    },
  },
  production: {
    url: {
      api: "https://newsbird.live/json_api",
      video: "https://d29l0yhxfc2fhu.cloudfront.net",
      image: "https://d1wqmjbf41l8jz.cloudfront.net",
      thumbnail: "https://d288q74725xe8u.cloudfront.net",
      share: "https://newsbird.live",
    },
    oAuth: {
      googleId:
        "707182129646-tu4fhvnruqllu1rii8suc2mqf3sobhr4.apps.googleusercontent.com",
      facebookId: "",
    },
    analytics: {
      google: "UA-215888484-1",
    },
  },
};

export const appConfig = config[env];

export const topics = [
  "",
  "all",
  "politics",
  "sports",
  "business",
  "entertainment",
  "world",
  "scienceandtech",
];
