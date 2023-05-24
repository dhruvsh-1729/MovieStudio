import React, { useContext,useEffect,useState } from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../../context/UserContext'

const Card = (movie) => {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";

    const {loggedUser,setLoggedUser} = useContext(UserContext)
    const [likedMovies,setLikedMovies] = useState([])
    const [liked,setLiked] = useState(false)
    const [msg,setMsg] = useState('')

    const incrementLike = async(e,id)=>{
      e.preventDefault()
        const response = await axios.post(`http://localhost:4001/likes`,{email:loggedUser.email,id})
        const mesg = response.data.message;
        setMsg(mesg)
        setLikedMovies(response.data.user.likes)
        setLoggedUser(response.data.user)
        if(likedMovies.indexOf(movie.id)!==-1) setLiked(true)
    }

  useEffect(()=>{
    console.log(msg)
    console.log(likedMovies)
    console.log(liked)
  },[msg,likedMovies,liked])

  return (
    <div className={styles.main}>
    <div className="card main" style={{"width":"18rem"}}>
  <img src={IMG_URL+movie.poster_path} className="card-img-top" alt={movie.title} />
  <div className="card-body">
    <h5 className="card-title" style={{"height":"5rem"}}>{movie.title}</h5>
    <Link href={`/movie/${movie.id}`} className="btn btn-primary">See more...</Link>
    <button onClick={e=>incrementLike(e,movie.id)} className={`btn mx-3 px-3 ${!liked? 'btn-danger':'btn-outline-danger'}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg> Like</button>
  </div>
</div>
    </div>
  )
}

export default Card