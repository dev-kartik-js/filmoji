import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='w-screen pt-[600px] bg-black'>
      <div className=' -mt-36  md:-mt-20 md:pl-8 relative z-20 text-left'>
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies.TopRated} />
        <MovieList title={'Popular'} movies={movies.PopularMovies} />
        <MovieList title={'Up Coming Movies'} movies={movies.Upcoming} />
        <MovieList title={'Popular Tv Show'} movies={movies.PopularShow} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
