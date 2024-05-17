import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66416b213d66a67b3433d36f.mockapi.io/",
});

export default mainUrl;
