import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  // fetching the movies
  const getMovieVideos = async (movieId) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const result = await data.json();
      const filterTrailer = result.results.filter(
        (result) => result.type === "Trailer"
      );
      const trailer = filterTrailer.length
        ? filterTrailer[0]
        : result.results[0];
      dispatch(addTrailerVideo(trailer));
      console.log(trailer);
    } catch (e) {
      console.error(e);
    }
    // const movies = result;
  };
  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};
