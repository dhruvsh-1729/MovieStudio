import React, { useEffect, useState } from 'react'
import { Navigate} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
import axios from 'axios'
import Loader from '../Loader/Loader'

const Signup = () => {

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
    })
    const [msg,setMsg] = useState(false);
    const [login,setLogin] = useState(false);


    useEffect(() => {
        console.log(user)
    }, [user])

    const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const response = await axios.post("http://localhost:4001/signup",user);
        const data = response.data;

        console.log(data)
        
        if(data.canLogIn){
            setMsg(true);
            setTimeout(()=>{setLogin(true)},2000)
        }
        }
        catch(err){ console.log(err)}
    
    }

    return (
        <div className='container my-10'>
            <div className={styles.title}><span>Signup Form</span></div>
            {msg && <div className={styles.navigate}><span>User already exists....Redirecting to Login Page</span><Loader/></div>}

            <div className="row">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>

                            <input type="text" className="form-control" name="first_name" placeholder="First name" aria-label="First name" onChange={(e) => setUser({...user,first_name: e.target.value })} />
                        </div>
                        <div className="col">
                            <label htmlFor="secondName" className="form-label">Second Name</label>

                            <input type="text" className="form-control" name="last_name" placeholder="Last name" aria-label="Last name" onChange={(e) => setUser({...user,last_name: e.target.value })} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" id="inputEmail4" onChange={(e) => setUser({...user,email: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="inputPassword4" onChange={(e) => setUser({...user, password: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setUser({...user, address: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" name="address2" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e) => setUser({...user, address2: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" id="inputCity" onChange={(e) => setUser({...user, city: e.target.value })} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select" name="state" onChange={(e) => setUser({...user, state: e.target.value })}>
                            <option>Choose...</option>
                            {states.map(state => {
                                return (<option>{state}</option>)
                            })}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" name="zip" id="inputZip" onClick={(e) => { setUser({...user, zip: e.target.value }) }} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" >Sign in</button>
                    </div>
                </form>
            </div>
        
        {login && <Navigate to="/login"/>}

        </div>

    )
}

export default Signup