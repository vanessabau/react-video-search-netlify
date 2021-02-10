import axios from "axios";

const KEY =
  "AIzaSyDwGwCOv-fE5hKD2okEbjPZunNXymileeM";

export default axios.create({
  baseURL:
    "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
