import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import trakabg from '../../assets/images/traka1.jpg'

const Login = () => {
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
                        <input type="text" className='formInput' placeholder="Enter your first name"></input>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="text" className='formInput' placeholder="Enter your password"></input>
                    </p>

                    <Link className='login-link' to="/dashboard">
                        <button>Login</button>
                    </Link>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login