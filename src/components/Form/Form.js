import React from 'react'
import styles from './Form.module.css';
import {Link} from 'react-router-dom'

const Form = () => {
  return (
    <div className='container my-5 flex'>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
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
</div>
  )
}

export default Form;