import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Controller/Redux/authSlice'
import './login.css';
import trakabg from '../../assets/images/traka1.jpg'

const Login = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })

    const inputChanged = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
            // [e.target.name]: e.target.value
        })
    }

    const submit =(e) => {
        dispatch(signIn(formInput))
        e.preventDefault();
    }



  return (
    <div className='login-container'>
        {/* <h4>Login</h4> */}
        <div className="login-form-wrapper">
            <div className="login-wrapper-left">
                <div className="login-caption">
                    "...Keep track, stay on traka"
                </div>
                <div className="login-overlay-wrapper">
                    <div className="login-overlay"></div>
                    <img src={trakabg} alt="traka cover" className="login-overlay-img" />
                </div>
            </div>
            <div className="login-wrapper-right">
                <div className="login-logo-wrapper">traka</div>
                <form>
                    <p>
                        <label>First Name</label>
                        <input type="text" name='firstName' className='formInput' placeholder="Enter your first name" onChange={(e)=> setFormInput(e.target.value) } value={formInput.name}></input>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" className='formInput' placeholder="Enter your password" onChange={(e)=> setFormInput(e.target.value) } value={formInput.password}></input>
                    </p>

                    <Link className='login-link' to="/dashboard">
                        <button type='submit' onClick={submit}>Login</button>
                    </Link>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login