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
      video: "https://dufo0lcu4giz5.cloudfront.net",
      image: "https://dufo0lcu4giz5.cloudfront.net",
      thumbnail: "https://dufo0lcu4giz5.cloudfront.net",
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
      api: "http://localhost:8000/json_api",
      video: "https://dufo0lcu4giz5.cloudfront.net",
      image: "https://dufo0lcu4giz5.cloudfront.net",
      thumbnail: "https://dufo0lcu4giz5.cloudfront.net",
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
      video: "https://dufo0lcu4giz5.cloudfront.net",
      image: "https://dufo0lcu4giz5.cloudfront.net",
      thumbnail: "https://dufo0lcu4giz5.cloudfront.net",
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
