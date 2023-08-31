import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { posterPath } = props;
  return (
    <div className="w-48  md:w-56 pr-4">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
