import React from 'react';
import './createAgent.scss';
import NavBar from '../../components/navigation/NavBar';
import { Link } from 'react-router-dom';
import { CreateAgentCrumb } from '../../components/breadcrumb/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons'

function CreateAgent() {
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
                            <label>Firstname</label>
                            <input className = 'formInput' type="text" name='' value="{}" onChange="{(e)=> setIncidence(e.target.value)}" placeholder="What's the incidence?"></input>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input className = 'formInput' type="text" name='' value="{}" onChange="{(e)=> setIncidence(e.target.value)}" placeholder="What's the incidence?"></input>
                        </div>
                        <div>
                            <label>Username</label>
                            <input className = 'formInput' type="text" name='' value="{}" onChange="{(e)=> setIncidence(e.target.value)}" placeholder="What's the incidence?"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input className = 'formInput' type="text" name='' value="{}" onChange="{(e)=> setIncidence(e.target.value)}" placeholder="What's the incidence?"></input>
                        </div>
                        <div>
                            <label>Phone number</label>
                            <input className = 'formInput' type="text" name='' value="{}" onChange="{(e)=> setIncidence(e.target.value)}" placeholder="What's the incidence?"></input>
                        </div>
                    </form>
                </div>
                <div className="form-info">

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CreateAgent