import React, { useState } from 'react'
import NavBar from '../../components/navigation/NavBar'
import './agent.scss'
import { Link } from 'react-router-dom';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreateAgentButton } from '../../components/addButton/AddButton'
import AgentTable from './AgentTable';
import { AgentCard } from '../../components/card/Card';

const Agent = () => {

    const [list, setList] = useState(true)


    const toggleList = () => {
        setList(!list);
    }
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

                {
                    list ? 
                    <>
                        <svg onClick={toggleList} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left">
                            <line className='crumblist-active' x1="23" x2="3" y1="6" y2="6"/>
                            <line className='crumblist-active' x1="17" x2="3" y1="12" y2="12"/>
                            <line className='crumblist-active' x1="10" x2="3" y1="18" y2="18"/>
                        </svg>
                        <svg onClick={toggleList} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                            <rect className='crumbgrid' width="7" height="7" x="3" y="3" rx="1"/>
                            <rect className='crumbgrid' width="7" height="7" x="14" y="3" rx="1"/>
                            <rect className='crumbgrid' width="7" height="7" x="14" y="14" rx="1"/>
                            <rect className='crumbgrid' width="7" height="7" x="3" y="14" rx="1"/>
                        </svg>
                    </> : 
                    <>
                        <svg onClick={toggleList} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left">
                            <line className='crumblist' x1="23" x2="3" y1="6" y2="6"/>
                            <line className='crumblist' x1="17" x2="3" y1="12" y2="12"/>
                            <line className='crumblist' x1="10" x2="3" y1="18" y2="18"/>
                        </svg>
                        <svg onClick={toggleList} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                            <rect className='crumbgrid-active' width="7" height="7" x="3" y="3" rx="1"/>
                            <rect className='crumbgrid-active' width="7" height="7" x="14" y="3" rx="1"/>
                            <rect className='crumbgrid-active' width="7" height="7" x="14" y="14" rx="1"/>
                            <rect className='crumbgrid-active' width="7" height="7" x="3" y="14" rx="1"/>
                        </svg>
                    </>
                }
               
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left">
                    <line className='crumblist' x1="23" x2="3" y1="6" y2="6"/>
                    <line className='crumblist' x1="17" x2="3" y1="12" y2="12"/>
                    <line className='crumblist' x1="10" x2="3" y1="18" y2="18"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                    <rect className='crumbgrid' width="7" height="7" x="3" y="3" rx="1"/>
                    <rect className='crumbgrid' width="7" height="7" x="14" y="3" rx="1"/>
                    <rect className='crumbgrid' width="7" height="7" x="14" y="14" rx="1"/>
                    <rect className='crumbgrid' width="7" height="7" x="3" y="14" rx="1"/>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid">
                    <rect className='crumbgrid-active' width="7" height="7" x="3" y="3" rx="1"/>
                    <rect className='crumbgrid-active' width="7" height="7" x="14" y="3" rx="1"/>
                    <rect className='crumbgrid-active' width="7" height="7" x="14" y="14" rx="1"/>
                    <rect className='crumbgrid-active' width="7" height="7" x="3" y="14" rx="1"/>
                </svg> */}
            </div>
        </div>
        
        {  list ? 

            <div className="agent-wrapper">
                <AgentTable />
            </div>
            
            :
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
        
        }
        
    </div>
  )
}

export default Agent