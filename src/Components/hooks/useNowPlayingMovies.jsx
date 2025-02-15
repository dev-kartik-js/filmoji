import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../../utils/constants";


const useNowPlayingMovies=() =>{
    const dispatch = useDispatch();
  const GET_NOW_PLAYING_MOVIE = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_options);
  const json = await data.json();

  dispatch(addNowPlayingMovies(json.results));
  
  };
  useEffect(()=>{
    GET_NOW_PLAYING_MOVIE();
  },[]);
};

export default useNowPlayingMovies;