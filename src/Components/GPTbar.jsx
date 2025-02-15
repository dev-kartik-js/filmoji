import React, { useState } from 'react';
import { API_options, Sign_bg } from '../utils/constants';
import genAI from '../utils/Gemini';
import { addGptmovieResult } from '../utils/GPT_Slice';
import { useDispatch } from 'react-redux';
import smbg from '../utils/images/smbg.jpeg';

const GPTbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Step 1: Add loading state

  const SearchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTsearchClick = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true); // Step 2: Set loading to true before API call

    try {
      const GPTquery = `Act as a movie recommender system and suggest some based on: ${searchQuery}. Only give 5 comma-separated titles like: gadar, sholay, zero, hero, villain`;

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });
      const result = await model.generateContent(GPTquery);
      const gptMovies = result.response.text().split(',').map(movie => movie.trim());

      const PromiseArray = gptMovies.map(movie => SearchMovieTMDB(movie));
      const tmdbResults = await Promise.all(PromiseArray);

      dispatch(addGptmovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Step 2: Set loading to false after API call
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleGPTsearchClick();
  };

  return (
    <div className="relative bg-black h-screen w-full">
      {/* Background Images */}
      <div className="hidden sm:block absolute inset-0 w-full h-full bg-black">
        <img className="w-full h-full object-cover opacity-50" src={Sign_bg} alt="Background" />
      </div>
      <div className="sm:hidden absolute inset-0 w-full h-full bg-black">
        <img className="w-full h-full object-cover opacity-40" src={smbg} alt="Mobile background" />
      </div>

      {/* Search Bar */}
      <div className="absolute top-24 left-0 w-full flex items-center justify-center p-4 z-10">
        {/* Mobile View */}
        <div className="w-full max-w-2xl space-y-4 bg-black bg-opacity-80 p-4 rounded-2xl sm:hidden">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What would you like to watch today!!..."
            className="w-full h-14 px-6 text-lg rounded-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleGPTsearchClick}
            disabled={isLoading} // Disable button during loading
            className={`w-full px-8 py-4 rounded-full bg-gradient-to-r from-gray-400/20 to-yellow-300/20 backdrop-blur-sm border border-gray-500/30 hover:border-yellow-300/50 transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            <span className="bg-gradient-to-r from-gray-200 to-yellow-300 bg-clip-text text-transparent font-bold text-xl">
              {isLoading ? 'Searching...' : 'Search'} {/* Change button text during loading */}
            </span>
          </button>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden sm:flex gap-4 bg-opacity-70 bg-black p-4 rounded-full w-full max-w-2xl">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What would you like to watch today!!..."
            className="text-sm md:text-lg w-full h-12 md:h-16 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={handleGPTsearchClick}
            disabled={isLoading} // Disable button during loading
            className={`bg-gradient-to-r from-gray-400 to-yellow-300 text-transparent bg-clip-text font-bold text-2xl px-6 py-2 rounded-lg hover:opacity-90 transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {isLoading ? 'Searching...' : 'Search'} {/* Change button text during loading */}
          </button>
        </div>

        {/* Step 3: Add Spinner */}

        {isLoading && (
          <div className="absolute top-full mt-4 w-full flex justify-center">
            <div className="h-12 w-12 rounded-full border-b-2 border-gray-400 border-t-yellow-300 animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTbar;

