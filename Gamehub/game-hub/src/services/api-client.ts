import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ff55bc9492841718ee31dd9f0afbefe",
  },
});
