import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cae3944ea3bc74f8a441c484870d6c9b",
    language: "ko-kr",
  },
});

export const movieApi = {
  nowplaying: () => api.get("movie/now_playing"),
  topRated: () => api.get("movie/top_rated"),
  upComming: () => api.get("movie/upcoming"),
  moviedetail: (movie_id) => api.get(`movie/${movie_id}`),
  similar: (id) => api.get(`movie/${id}/similar`),
  video: (id) => api.get(`movie/${id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
