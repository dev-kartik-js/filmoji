
import { useSelector } from "react-redux";
import GPTsearch from "./GPTsearch";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies"
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRated from "./hooks/useTopRated";
import useUpcoming from "./hooks/useUpcoming";
import MainConatianer from "./MainConatianer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularShow from "./hooks/usePopularShow";



const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  usePopularShow();

  
  
  return (
    <div>
     
     
      {
       showGptSearch ? (<GPTsearch/>)  : (<><MainConatianer/>
      <SecondaryContainer/> </>

      )}
      
      
     
    </div>
  )
};

export default Browse;