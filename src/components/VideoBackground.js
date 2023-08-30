import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";
import { useState } from "react";

const VideoBackground = (props) => {
  const { backdrop, movieId } = props;
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
    console.log("video finished state = true");
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
    <div className="w-screen ">
      {!isVideoFinished ? (
        <>
          {console.log("rendering video")}
          <iframe
            className="aspect-video w-[100%]"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?playlist=${
              trailerVideo?.key
            }&autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onEnded={handleVideoEnd}
            // onEnded={console.log("video ended")}
          ></iframe>
          <button
            onClick={handleMuteToggle}
            className="absolute z-10 bottom-16 right-10  leading-none mx-3 py-4 px-10 bg-gray-600/60 hover:bg-gray-600/40  text-white rounded   shadow-sm shadow-black"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </>
      ) : (
        <div className="relative w-full">
          <img
            src={`http://image.tmdb.org/t/p/original/${backdrop}`}
            alt="Backdrop"
            className="w-full h-full object-cover"
          />
          {console.log("rendering backdrop")}
          <button
            onClick={handleRerunClick}
            className="absolute z-10 bottom-16 right-10  leading-none mx-3 py-4  transform -translate-x-1/2 -translate-y-1/2 bg-gray-600/60 hover:bg-gray-600/40 px-4 text-white rounded"
          >
            Rerun
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
