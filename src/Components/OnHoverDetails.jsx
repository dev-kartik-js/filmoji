import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const OnHoverDetails = ({ title, overview, release_date, original_language, poster_path }) => {
  return (
    <div className="  w-full h-full flex bg-black text-white rounded-lg shadow-lg">
      {/* Poster Section */}
      <div
        className="w-1/3 h-auto bg-cover bg-center rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${IMG_CDN_URL + poster_path})`,
        }}
      ></div>

      {/* Information Section */}
      <div className="w-2/3 flex flex-col justify-start pl-4 py-2">
        {/* Title */}
        <h3 className="text-2xl font-bold">{title}</h3>

        {/* Overview */}
        <p className="text-base text-gray-300 mt-6 line-clamp-none">
          {overview || 'No overview available.'}
        </p>

        {/* Additional Info */}
        <div className="text-sm text-gray-400 mt-2">
          <p>
            <span className="font-semibold text-gray-200">Release Date:</span> {release_date || 'N/A'}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Language:</span> {original_language?.toUpperCase() || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnHoverDetails;
