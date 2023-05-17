import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (movie) => {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={styles.main}>
    <div className="card main" style={{"width":"18rem"}}>
  <img src={IMG_URL+movie.poster_path} className="card-img-top" alt={movie.title} />
  <div className="card-body">
    <h5 className="card-title" style={{"height":"5rem"}}>{movie.title}</h5>
    <Link href={`/movie/${movie.id}`} className="btn btn-primary">See more...</Link>
  </div>
</div>
    </div>
  )
}

export default Card