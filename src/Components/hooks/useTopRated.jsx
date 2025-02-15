import { useDispatch } from "react-redux";
import {  addTopRated } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../../utils/constants";


const useTopRated=() =>{
    const dispatch = useDispatch();
  const GET_TOP_RATED = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_options);
  const json = await data.json();

  dispatch(addTopRated(json.results));

  };
  useEffect(()=>{
    GET_TOP_RATED();
  },[]);
};

export default useTopRated;