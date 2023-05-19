import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import MoviesContext from '../../context/MovieContext';
import styles from './Movie.module.css'

const Movie = () => {
  const { movies, setMovies } = useContext(MoviesContext)
  const location = useLocation();
  const movie_id = Number(location.pathname.slice(7));
  const my_movies = movies.filter(movie => movie_id === movie.id);
  const my_movie = my_movies[0];
  console.log(my_movie)
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className='container my-3 align-center'>
      <div className={styles.moviecard}>
        <img src={IMG_URL + `${my_movie.poster_path}`} className={styles.img} alt={my_movie.title} />
        <div className="card-body">
          <h5 className={styles.title}>{my_movie.title}</h5>
          <p className={styles.text}>{my_movie.overview}</p>
          <ul className="list-group">
            <li className="list-group-item">{`Release Date : ${my_movie.release_date}`}</li>
            <li className="list-group-item">{`Original language : ${my_movie.original_language}`}</li>
            <li className="list-group-item">{`Vote count : ${my_movie.vote_count}`}</li>
          </ul>
          <h1 className={styles.vote}>{my_movie.vote_average}</h1>
        </div>
      </div>
    </div>
  )
}

export default Movie