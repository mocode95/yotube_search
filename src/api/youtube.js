import axios from "axios";

const KEY = "AIzaSyA2_pY3XQtMF03heFdtphVDgdbWW77DVE4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxReadults: 5,
    key: KEY,
  },
});
