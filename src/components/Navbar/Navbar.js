import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import Auth from '../Auth/Auth'
import UserContext from '../../context/UserContext'

const Navbar = () => {

  const {loggedUser,setLoggedUser} = useContext(UserContext)
  return (
 
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MovieStudios</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Movies</Link>
                </li>
              </ul>
             {!(loggedUser._id) && <Auth />}
             {loggedUser._id && <Search user={loggedUser}/>}
            </div>
          </div>
        </nav>
      </div>
   
  )
}

export default Navbar