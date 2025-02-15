import { useDispatch } from "react-redux";
import {  addPopularShow } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../../utils/constants";


const usePopularShow=() =>{
    const dispatch = useDispatch();
  const GET_Popular_TV_Show = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/tv/popular?page=1", API_options);
  const json = await data.json();

  dispatch(addPopularShow(json.results));

  

  };
  useEffect(()=>{
    GET_Popular_TV_Show();
  },[]);
};

export default usePopularShow;