import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../../utils/constants";


const usePopularMovies=() =>{
    const dispatch = useDispatch();
  const GET_POPULAR_MOVIES = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_options);
  const json = await data.json();

  dispatch(addPopularMovies(json.results));

  };
  useEffect(()=>{
    GET_POPULAR_MOVIES();
  },[]);
};

export default usePopularMovies;