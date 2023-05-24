import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({ user }) => {
    return (
        <div>
            <ul className='navbar-nav'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle px-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hi {`${user.first_name+` `+user.last_name}`}!
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" href="#">View Profile</Link>
                        <Link class="dropdown-item" href="#">My Wishlist</Link>
                        <Link class="dropdown-item" href="#">My Activity</Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" href="#">Logout</Link>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Search