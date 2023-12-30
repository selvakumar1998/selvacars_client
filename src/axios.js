import axios from "axios";

const instance = axios.create({
  baseURL: "https://kind-tan-rattlesnake-kilt.cyclic.app",
});

export default instance;
