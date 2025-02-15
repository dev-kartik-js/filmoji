import React from 'react';
import MoviesCard from './MoviesCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
<div className="px-4 md:px-6 pt-4 text-white">
  <h1 className="text-2xl md:text-3xl py-4">{title}</h1>
  {/* Scrollable Movie Cards */}
  <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {movies.map((movie, index) => (
      <MoviesCard
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title || movie.name}
        overview={movie.overview}
        original_language={movie.original_language}
        release_date={movie.release_date}
        index={index}
      
        
      />
    ))}
  </div>
</div>

  );
};

export default MovieList;
