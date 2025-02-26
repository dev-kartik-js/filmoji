
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainConatianer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    

    
    if(!movies) return;
    const mainMovie = movies[0];
    
    const  {original_title, overview, id} = mainMovie;

   
  return (
     <div>  
      <VideoBackground movieId={id}/>
     <VideoTitle title = {original_title} overview = {overview}/>
    </div>
  )
}

export default MainConatianer;