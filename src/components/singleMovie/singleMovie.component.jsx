import { Link } from 'react-router-dom';
import './singleMovie.style.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
const nonePoster ='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = ()=>{
  const {id} = useParams();
  const {data:movie,isLoading} = useFetch(`&i=${id}`);

  const {Title,Plot,Year,imdbRating,Actors,Poster} = movie;
  if(isLoading){
    return <div className='isLoading'/>
  }else{
    return (
      <section className="single-movie">
        <div style={{backgroundImage:`url(${Poster !=='N/A' ? Poster : nonePoster })`}} className="image-wrapper">
        </div>
        <div className="info-wrapper">
          <h1>{Title}</h1>
          <p>{Plot !== 'N/A' ? Plot : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi, nihil a incidunt consequuntur animi corporis illum suscipit quis possimus inventore asperiores cumque, autem veniam, velit neque? Laudantium, cum maxime.'}</p>
          <span><b>Actors</b> : {Actors}</span>
          <span><b>Year</b> : {Year}</span>
          <span><b>IMDB Rating</b> : {imdbRating} <span className='star'>&#9733;</span></span>
          <Link className='btn' to='/'>Back To Movies</Link>
        </div>
      </section>
    )
  }
}

export default SingleMovie;