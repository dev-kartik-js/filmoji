import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import OnHoverDetails from "./OnHoverDetails";

const MovieCard = ({ poster_path, title, overview, release_date, original_language, creator, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClose = () => setIsHovered(false);

  return (
    <div
      className="relative rounded-lg overflow-visible cursor-pointer w-36 sm:w-48 md:w-56 flex-shrink-0 transition-transform duration-300 left-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Movie Poster */}
      <img
        className={`rounded-lg w-full h-auto object-cover transition-transform duration-300 ${
          isHovered ? "scale-100" : ""
        }`}
        src={IMG_CDN_URL + poster_path}
        alt={title}
      />

      {/* Conditionally render hover details for small devices */}
      {isHovered && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 sm:hidden">
    <div className="relative w-[90vw] sm:w-[400px] md:w-[600px] h-auto bg-black bg-opacity-90 p-4 rounded-lg shadow-lg z-10 overflow-y-auto">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-white rounded-full py-1 px-2"
        onClick={handleClose}
      >
        &times;
      </button>

      {/* OnHoverDetails Component */}
      <OnHoverDetails
        title={title}
        overview={overview}
        release_date={release_date}
        original_language={original_language}
        creator={creator}
        poster_path={IMG_CDN_URL + poster_path}
      />
    </div>
  </div>
)}

     

      {/* Conditionally render hover details for medium and larger devices */}
      {isHovered && (
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[400px] md:w-[600px] h-auto max-h-[80vh] bg-black bg-opacity-90 p-4 rounded-lg shadow-lg z-10 overflow-y-auto">
          <OnHoverDetails
            title={title}
            overview={overview}
            release_date={release_date}
            original_language={original_language}
            creator={creator}
            poster_path={IMG_CDN_URL + poster_path}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;