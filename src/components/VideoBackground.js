import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = (props) => {
  const { backdrop, movieId } = props;
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  const handleRerunClick = () => {
    setIsVideoFinished(false);
  };

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    // <div className="w-screen ">
    //   <iframe
    //     className="aspect-video w-[100%]"
    //     src={`https://www.youtube.com/embed/${trailerVideo?.key}?playlist=${trailerVideo?.key}&autoplay=1&mute=1&controls=0&rel=0`}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   ></iframe>
    // </div>
    <div className="w-full ">
      {!isVideoFinished ? (
        <div className="w-full">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?playlist=${
              trailerVideo?.key
            }&autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onEnded={handleVideoEnd}
          ></iframe>
          <button
            onClick={handleMuteToggle}
            className="absolute z-10 right-24 bottom-36  leading-none py-4 px-10 bg-gray-600/60 hover:bg-gray-600/40  text-white rounded   shadow-sm shadow-black"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      ) : (
        <div className="relative w-full">
          <img
            src={IMG_CDN_URL + backdrop}
            alt="Backdrop"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRerunClick}
            className="absolute z-10 bottom-16 right-10  leading-none py-4  transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/60 hover:bg-gray-600/40 px-4 text-white rounded"
          >
            Rerun
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
