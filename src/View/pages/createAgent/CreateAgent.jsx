import React, { useState } from 'react';
import './createAgent.scss';
import NavBar from '../../components/navigation/NavBar';
import { Link } from 'react-router-dom';
import { CreateAgentCrumb } from '../../components/breadcrumb/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons'

function CreateAgent() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [facility, setFacility] = useState('')
    const [admin, setAdmin] = useState('')
    const [rank, setRank] = useState('')
    const [status, setStatus] = useState('')
    
  return (
    <div className='createAgent-container'>
        <NavBar />
            
        <div className="createAgent-breadcrumb-wrapper">
            <CreateAgentCrumb />
        </div>

        <div className="createAgent-wrapper">

            <div className="creatAgent-left">
                <div className="agent-photo">
                    <div className="agent-icon-frame">
                        <FontAwesomeIcon className='agent-icon' icon={faUser}/>
                    </div>
                </div>
                <div className="camera-frame">
                    <FontAwesomeIcon icon={faCamera}/>
                </div>
                <div className="agent-info">
    
                </div>
            </div>
            <div className="creatAgent-right">
                <div className="form-info">
                    <form action="">
                        <div>
                            <input className = 'formInput' type="text" name='' value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder=" " ></input>
                            <label>First Name</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder=" "></input>
                            <label>Last Name</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder=" "></input>
                            <label>Username</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder=" "></input>
                            <label>Email</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder=" "></input>
                            <label>Phone number</label>
                        </div>
                    </form>
                </div>
                <div className="form-info">
                    <form action="">
                        <div>
                            <input className = 'formInput' type="text" name='' value={gender} onChange={(e)=> setGender(e.target.value)} placeholder=" "></input>
                            <label>Gender</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={facility} onChange={(e)=> setFacility(e.target.value)} placeholder=" "></input>
                            <label>Facility</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={admin} onChange={(e)=> setAdmin(e.target.value)} placeholder=" "></input>
                            <label>Admin</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={rank} onChange={(e)=> setRank(e.target.value)} placeholder=" "></input>
                            <label>Rank</label>
                        </div>
                        <div>
                            <input className = 'formInput' type="text" name='' value={status} onChange={(e)=> setStatus(e.target.value)} placeholder=" "></input>
                            <label>Status</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CreateAgent