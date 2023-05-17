import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Card from './Card/Card'
import styles from './Movies.module.css'
import MoviesContext from '../../context/MovieContext'

const About = () => {

  const {movies,setMovies} = useContext(MoviesContext);
  console.log(movies);

  return (
    <div className='row'>
    {
       movies.map(movie => {
        return(
            <div key={movie.id} className='col-md-3'>
            <Link className={styles.link} to={`/movie/${movie.id}`}>
            <Card {...movie} />
            </Link>
            </div>
        )
       })
    }
    </div>

  )
}

export default About