import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const TrailerVideo = useSelector(store=>store.movies?.TrailerVideo); 
    useMovieTrailer(movieId);
    
    return (
        <div className="absolute top-35 left-0 w-full h-full">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${TrailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${TrailerVideo?.key}`}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};    

export default VideoBackground;