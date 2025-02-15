import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GPTsuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  // Return null if there's no data
  if (!movieNames || !movieResults) return null;

  

  return (
    <div className="relative">
    {/* Heading Section */}
    <div className="absolute -top-[400px] sm:-top-[450px] md:-top-[400px] left-0 w-full z-40 mt-8 sm:mt-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-6 sm:mb-8 tracking-wide opacity-95">
        🎬 Your Personalized Picks
      </h1>
 
  



     {/* Bouncing Arrow */}
  <div className="flex justify-center mt-4 sm:mt-6">
  <svg 
      className="w-20 h-32 text-yellow-400 animate-bounce"
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  </div>
  </div>
  
    {/* Movie List Section */}
    <div className="bg-black relative">
      {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  </div>
  
  );
};


export default GPTsuggestions;