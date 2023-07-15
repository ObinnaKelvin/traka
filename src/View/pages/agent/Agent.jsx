import React from 'react'
import NavBar from '../../components/navigation/NavBar'
import './agent.scss'
import { Link } from 'react-router-dom';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreateAgentButton } from '../../components/addButton/AddButton'
import listActive from '../../assets/images/list-active.png'
import listInactive from '../../assets/images/list-inactive.png'
import gridActive from '../../assets/images/grid-active.png'
import gridInactive from '../../assets/images/grid-inactive.png'

const Agent = () => {
  return (
    <div className='agent-container'>
        <CreateAgentButton />
        <NavBar />

        <div className="agent-breadcrumb">
            <div className="crumb-left">
                <Link className='agent-link' to={'/administration'}>
                    <p>Administration</p>
                </Link>
                <p>/</p>
                <p>Agent</p>
            </div>
            <div className="crumb-right">
                <img className='crumblist' src={listInactive}/>
                <img className='crumbgrid' src={gridActive}/>
            </div>
        </div>

        <div className="agent-wrapper">
                <div className="agent-member">
                    <div className="agent-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="agent-member-rank"></div>
                        </span>
                    </div>
                    <div className="agent-member-details">
                        <div className='agent-member-name'>
                            Mary Bassey
                        </div>
                        <div className='agent-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span><a href='tel:'>+234 812 782 2787</a></span>
                        </div>
                        <div className='agent-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island - Idejo</span>
                        </div>
                        <div className='agent-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="agent-member">
                    <div className="agent-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="agent-member-rank"></div>
                        </span>
                    </div>
                    <div className="agent-member-details">
                        <div className='agent-member-name'>
                            Mary Bassey
                        </div>
                        <div className='agent-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span><a href='tel:'>+234 812 782 2787</a></span>
                        </div>
                        <div className='agent-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island - Idejo</span>
                        </div>
                        <div className='agent-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="agent-member">
                    <div className="agent-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="agent-member-rank"></div>
                        </span>
                    </div>
                    <div className="agent-member-details">
                        <div className='agent-member-name'>
                            Mary Bassey
                        </div>
                        <div className='agent-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span><a href='tel:'>+234 812 782 2787</a></span>
                        </div>
                        <div className='agent-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island - Idejo</span>
                        </div>
                        <div className='agent-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>
                <div className="agent-member">
                    <div className="agent-member-avatar">
                        <span>
                            <FontAwesomeIcon icon={faUser}/>
                            <div className="agent-member-rank"></div>
                        </span>
                    </div>
                    <div className="agent-member-details">
                        <div className='agent-member-name'>
                            Mary Bassey
                        </div>
                        <div className='agent-member-phone'>
                            <span><FontAwesomeIcon icon={faPhone}/></span>
                            <span><a href='tel:'>+234 812 782 2787</a></span>
                        </div>
                        <div className='agent-member-facility'>
                            <span><FontAwesomeIcon icon={faLocationDot}/></span>
                            <span>Victoria Island - Idejo</span>
                        </div>
                        <div className='agent-member-email'>
                            <span><FontAwesomeIcon icon={faEnvelope}/></span>
                            <span>itsupport@lagoonhospitals.com</span>
                        </div>
                    </div>
                </div>

        </div>
        
    </div>
  )
}

export default Agent