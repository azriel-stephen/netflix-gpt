import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const PrimaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[1];
  const { original_title, overview, id, backdrop_path } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} backdrop={backdrop_path} />
    </div>
  );
};

export default PrimaryContainer;
