import React, { useState } from 'react'
import './updateAgent.scss';
import NavBar from '../../components/navigation/NavBar';
import { UpdateAgentCrumb } from '../../components/breadcrumb/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import hospital from '../../assets/images/hospital.png';

function UpdateAgent() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [facility, setFacility] = useState('')
    const [admin, setAdmin] = useState('')
    const [rank, setRank] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')
    const [facilityList, setFacilityList] = useState([]);
    const [facilityChecked, setFacilityChecked] = useState([])

    //Add/Remove checked item from list
    const handleFacilityChecked = (event) => {
        let updatedList = [...facilityChecked];
        if(event.target.checked) {
            updatedList = [...facilityChecked, event.target.value];
        }
        else {
            updatedList.splice(facilityChecked.indexOf(event.target.value), 1)
        }

        setFacilityChecked(updatedList);
        console.log(updatedList)
    }



  return (
    <div className='updateAgent-container'>
    <NavBar />
        
    <div className="updateAgent-breadcrumb-wrapper">
        <UpdateAgentCrumb />
    </div>

    <div className="updateAgent-wrapper">

        <div className="updateAgent-left">
            <div className="agent-photo">
                <div className="agent-icon-frame">
                    <FontAwesomeIcon className='agent-icon' icon={faUser}/>
                </div>
            </div>
            <div className="camera-frame">
                <FontAwesomeIcon icon={faCamera}/>
            </div>
            <div className="agent-info">
                <div className='agent-detail'>
                    {firstName} {lastName}
                </div>
                <div className='agent-detail'>
                    <span><FontAwesomeIcon icon={faPhone}/></span>
                    <span><a href='tel:'>{phone}</a></span>
                </div>
                <div className='agent-detail'>
                    <span><FontAwesomeIcon icon={faLocationDot}/></span>
                    <span>{facilityChecked.join(', ')}</span>
                </div>
                <div className='agent-detail break'>
                    <span><FontAwesomeIcon icon={faEnvelope}/></span>
                    <span>{email}</span>
                </div>
            </div>
        </div>
        <div className="updateAgent-right">
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
                        <span><em>{username}</em> is available</span>
                    </div>
                    <div>
                        <input className = 'formInput' type="text" name='' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder=" "></input>
                        <label>Email</label>
                    </div>
                    <div>
                        <input className = 'formInput' type="telephone" name='' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder=" "></input>
                        <label>Phone number</label>
                    </div>
                    <div>
                        <select className = 'formSelect' onChange={(e)=> setGender(e.target.value)} value={gender}>
                            <option value="" disabled selected>Choose a gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <label>Gender</label>
                    </div>
                </form>
            </div>
            <div className="form-info">
                <form action="">
                    <div>
                        <p>Choose Facility</p>
                        {/* <input className = 'formInput' type="text" name='' value={facility} onChange={(e)=> setFacility(e.target.value)} placeholder=" "></input> */}
                            <div className='facilityWrapper'>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="Ikeja" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>Ikeja</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="Ikeja Clinic" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>Ikeja Clinic</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="Idejo" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>Idejo</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="LSS" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>LSS</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="Ikoyi" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>Ikoyi</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>
                                <div className='facilityItem'>
                                    <div className="checkbox-holder"></div>
                                    <input value="Ligali" type='checkbox' onChange={handleFacilityChecked}></input>
                                    <span>Ligali</span>
                                    <img src={hospital} alt='Hospital icon' />
                                </div>

                            </div>
                        {/* <label>Facility</label> */}
                    </div>
                    {/* <div>
                        <input className = 'formInput' type="text" name='' value={admin} onChange={(e)=> setAdmin(e.target.value)} placeholder=" "></input>
                        <label>Admin</label>
                    </div> */}
                    <div>
                        {/* <input className = 'formInput' type="text" name='' value={rank} onChange={(e)=> setRank(e.target.value)} placeholder=" "></input> */}
                        <select className = 'formSelect' onChange={(e)=> setRank(e.target.value)} value={rank}>
                            <option value="" disabled selected>Assign a Rank</option>
                            <option value="Agent">Agent</option>
                            <option value="Admin">Admin</option>
                            <option value="Team Lead">Team Lead</option>
                        </select>
                        <label>Rank</label>
                    </div>
                    <div>
                        <select className = 'formSelect' onChange={(e)=> setRole(e.target.value)} value={role}>
                            <option value="" disabled selected>Assign a Role</option>
                            <option value="Agent">Application Support</option>
                            <option value="Admin">Infrastructure Support</option>
                        </select>
                        <label>Role</label>
                    </div>
                    <div>
                        {/* <input className = 'formInput' type="text" name='' value={status} onChange={(e)=> setStatus(e.target.value)} placeholder=" "></input> */}
                        <select className = 'formSelect' onChange={(e)=> setStatus(e.target.value)} value={status}>
                            {/* <option value="" disabled selected>Assign a Rank</option> */}
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <label>Status</label>
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
    </div>
    
        
    </div>
  )
}

export default UpdateAgent