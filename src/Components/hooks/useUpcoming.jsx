import { useDispatch } from "react-redux";
import {   addUpcoming } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../../utils/constants";


const useUpcoming=() =>{
    const dispatch = useDispatch();
  const GET_Upcoming = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_options);
  const json = await data.json();

  dispatch(addUpcoming(json.results));

  };
  useEffect(()=>{
    GET_Upcoming();
  },[]);
};

export default useUpcoming;