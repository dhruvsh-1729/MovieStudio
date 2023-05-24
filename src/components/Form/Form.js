import React, { useState, useEffect, useContext } from 'react'
import styles from './Form.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import Movies from '../Movies/Movies'
import UserContext from '../../context/UserContext'

const Form = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [login, setLogin] = useState(false)
  const [navigate,setNavigate] = useState(false)

  const {loggedUser,setLoggedUser} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/login", user);
      const data = response.data;
      if(data.isLoggedIn) setLoggedUser(data.user)
    }
    catch (err) { console.log(err) }
  }

  useEffect(()=>{
    console.log(loggedUser)
  },[loggedUser,setLoggedUser])


  return (

    <div className='container my-5 flex'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control col-md-6" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUser({ ...user, email: e.target.value })} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control col-md-6" id="exampleInputPassword1" onChange={e => setUser({ ...user, password: e.target.value })} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <div className={styles.signupbox}>
          <div id="emailHelp" className="form-text">Don't have an account yet?</div>
          <Link to="/signup"><button type="submit" className="btn btn-primary">Signup here</button></Link>
        </div>

      </form>
      {navigate && <Navigate to="/" />}
    </div>

  )
}

export default Form;