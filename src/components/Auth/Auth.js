import React from 'react'
import {Link} from 'react-router-dom'

const Auth = () => {
  return (
    <div>
    <ul className='navbar-nav'>
    <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
      </li>

    </ul>
    </div>
  )
}

export default Auth