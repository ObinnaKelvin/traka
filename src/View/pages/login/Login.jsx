import React, { useEffect, useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../../Controller/Redux/authSlice'
import './login.css';
import trakabg from '../../assets/images/traka1.jpg'
import logo from '../../assets/images/traka_logo.gif'
import {toast} from 'react-toastify'
import axios from 'axios';

const Login = () => {
    const LOGIN_URL = "http://localhost:3005/api/auth/login"
    // const LOGIN_URL = "http://localhost:3005/api/auth/login"
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)


    const [formInput, setFormInput] = useState({
        firstName:"",
        password:""
    })

    const [firstName, setFirstName] = useState("")
    const [password, setPassword] = useState("")

    // useEffect(()=> {
    //     if(isError) {
    //         toast.error(message)
    //     }
    //     if(isSuccess || user) {
    //         navigate('/dashboard')
    //     }

    //     dispatch(reset())
    // }, [user, isError, isSuccess, message, navigate, dispatch])

    // const inputChanged = (e) => {
    //     setFormInput({
    //         ...formInput,
    //         [e.target.name]: e.target.value
    //         // [e.target.name]: e.target.value
    //     })
    // }

    // useEffect(() => {
    //     authenticate()
    // }, [])

    // const authenticate = async() => {
    //     await axios.post(LOGIN_URL, formInput)
    //     .then(response => console.log(response.data))
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3005/api/auth/login", {firstName, password})
            .then(response => console.log(response.data));
            localStorage.setItem('user', JSON.stringify(response.data));
            // .then(response => console.log(response.data));
            //console.log("Are you trying to login?", response)
            navigate('/dashboard')

        } catch (error) {
            console.log(error.response.data)
        }
        //dispatch(login(formInput))
    }

    // if(isLoading) {
    //     return <>Loading...</>
    // }



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
                <div className="login-logo-wrapper"><img src={logo} alt="traka logo" className='logo'/></div>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>First Name</label>
                        {/* <input type="text" name='firstName' className='formInput' placeholder="Enter your first name" onChange={(e)=> setFormInput(e.target.value) } value={formInput.firstName}></input> */}
                        <input type="text" name='firstName' className='formInput' placeholder="Enter your first name" onChange={(e)=> {setFirstName(e.target.value); console.log(e.target.value)}} value={firstName}></input>
                    </p>
                    <p>
                        <label>Password</label>
                        {/* <input type="password" className='formInput' placeholder="Enter your password" onChange={(e)=> setFormInput(e.target.value) } value={formInput.password}></input> */}
                        <input type="password" className='formInput' placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value); console.log(e.target.value)}} value={password}></input>
                    </p>

                    {/* <Link className='login-link'> */}
                        <button type='submit'>Login</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login