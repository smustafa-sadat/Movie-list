import { useGlobalContext } from "../../context";
import { Link } from 'react-router-dom';
import './movies.styles.css';
const nonePosterUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'; 
const Movies = ()=>{
  const { isLoading, movies } = useGlobalContext();
  if(isLoading){
    return <div className="isLoading"/>
  }else{
    return <div className="movie-wrapper">
      {
        movies.Search.map(movie=>{
          return <Link key={movie.imdbID} className="movie" to={`/movies/${movie.imdbID}`}>
            <img className="movie-img" src={movie.Poster === 'N/A' ? nonePosterUrl : movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </Link>
        })
      }
    </div>
  }
}

export default Movies;